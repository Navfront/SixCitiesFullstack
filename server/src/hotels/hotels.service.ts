import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { Hotel, HotelDocument } from './schemas/hotel.schema';

@Injectable()
export class HotelsService {
  constructor(
    @InjectModel(Hotel.name) private hotelModel: Model<HotelDocument>,
  ) {}

  create(createHotelDto: CreateHotelDto) {
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
