import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { ReqUser } from 'src/auth/jwt-auth.guard';
import { City, CityDocument } from 'src/cities/schemas/city.schema';
import { Location, LocationDocument } from 'src/cities/schemas/location.schema';
import { User, UserDocument } from 'src/users/schemas/user.schema';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { Hotel, HotelDocument } from './schemas/hotel.schema';

const LONG_OF_NEARBY = 30;

@Injectable()
export class HotelsService {
  constructor(
    @InjectModel(Hotel.name) private hotelModel: Model<HotelDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Location.name) private locationModel: Model<LocationDocument>,
    @InjectModel(City.name) private cityModel: Model<CityDocument>,
  ) {}

  async create(createHotelDto: CreateHotelDto, req: ReqUser) {
    const locCondidate = await this.locationModel.findOne({
      latitude: createHotelDto.location.latitude,
      longitude: createHotelDto.location.longitude,
    });

    const location =
      locCondidate ||
      (await this.locationModel.create(createHotelDto.location));
    if (!location) {
      throw new HttpException(
        `Не удалось создать location ${createHotelDto.location}`,
        HttpStatus.BAD_REQUEST,
      );
    }
    const user = await this.userModel.findById(req.user.userId);
    if (!user) {
      throw new HttpException(
        `Нет такого userId! ${req.user.userId}`,
        HttpStatus.BAD_REQUEST,
      );
    }
    const city = await this.cityModel.findById(createHotelDto.city);
    if (!city) {
      throw new HttpException(
        `Нет такого города! ${createHotelDto.city}`,
        HttpStatus.BAD_REQUEST,
      );
    }
    const hotelCondidate = await this.hotelModel.findOne({
      ...createHotelDto,
      host: user._id,
      location: location._id,
      city: city._id,
    });
    if (hotelCondidate) {
      throw new HttpException(
        `Такой hotel уже есть ${createHotelDto.title}`,
        HttpStatus.BAD_REQUEST,
      );
    }

    const hotel = await this.hotelModel.create({
      ...createHotelDto,
      host: user._id,
      location: location._id,
      city: city._id,
    });
    location.hotelId = hotel._id;
    console.log(`Post new hotel: ${hotel._id}`);
    city.hotels.push(hotel);

    location.save();
    city.save();
    return hotel.populate('location', 'latitude longitude');
  }

  async findAllByCityId(id: string) {
    const oId = new Types.ObjectId(id);
    const result = await this.hotelModel
      .find({ city: oId })
      .populate('location', 'latitude longitude');
    console.log('id', id, 'все отели', result.length);

    if (!result) {
      throw new HttpException('Такого города нет!', HttpStatus.NOT_FOUND);
    }
    return result;
  }

  async findAllNearBy(id: string) {
    const target = await (
      await this.hotelModel.findById(id)
    ).populate('location', 'latitude longitude');
    if (!target) {
      throw new HttpException('Такого hotel нет!', HttpStatus.NOT_FOUND);
    }

    const hotelLatitude = (hotel: Hotel) => hotel.city.location.latitude;
    const hotelLongtitude = (hotel: Hotel) => hotel.city.location.longitude;

    const hotels = await this.hotelModel.find({ city: target.city.name });
    const result = hotels.filter(
      (hotel) =>
        Math.abs(hotelLatitude(target) - hotelLatitude(hotel)) <=
          LONG_OF_NEARBY &&
        Math.abs(hotelLongtitude(target) - hotelLongtitude(hotel)) <=
          LONG_OF_NEARBY,
    );

    return result;
  }

  async findOne(id: string) {
    const result = await this.hotelModel
      .findById(id)
      .populate('location', 'latitude longitude');
    if (!result) {
      throw new HttpException('Такого отеля нет!', HttpStatus.NOT_FOUND);
    }
    return result;
  }
}
