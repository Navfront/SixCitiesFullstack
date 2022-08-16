import { Injectable, HttpException, HttpStatus, Request } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReqUser } from 'src/auth/jwt-auth.guard';
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
  ) {}

  create(createHotelDto: CreateHotelDto, req: ReqUser) {
    console.log(req.user);

    return this.hotelModel.create(createHotelDto);
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
