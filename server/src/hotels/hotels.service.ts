import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReqUser } from 'src/auth/jwt-auth.guard';
import { City, CityDocument } from 'src/cities/schemas/city.schema';
import { Location, LocationDocument } from 'src/cities/schemas/location.schema';
import { User, UserDocument } from 'src/users/schemas/user.schema';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { Hotel, HotelDocument } from './schemas/hotel.schema';

@Injectable()
export class HotelsService {
  constructor(
    @InjectModel(Hotel.name) private hotelModel: Model<HotelDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Location.name) private locationModel: Model<LocationDocument>,
    @InjectModel(City.name) private cityModel: Model<CityDocument>,
  ) {}

  async create(createHotelDto: CreateHotelDto, req: ReqUser) {
    const location = await this.locationModel.create(createHotelDto.location);
    const user = await this.userModel.findById(req.user.userId);
    const city = await this.cityModel.findById(createHotelDto.city);
    const hotel = await this.hotelModel.create({
      ...createHotelDto,
      host: user._id,
      location: location._id,
      city: city._id,
    });
    location.hotelId = hotel._id;
    location.save();
    console.log(`Post new hotel: ${hotel._id}`);
    city.hotels.push(hotel);
    city.save();
    return hotel;
  }

  findAllByCityId(id: string) {
    const result = this.hotelModel.find({ city: id });
    if (!result) {
      throw new HttpException('Такого города нет!', HttpStatus.NOT_FOUND);
    }
    return result;
  }

  findOne(id: string) {
    const result = this.hotelModel.findById(id);
    if (!result) {
      throw new HttpException('Такого отеля нет!', HttpStatus.NOT_FOUND);
    }
    return result;
  }
}
