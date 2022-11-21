import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCityDto } from './dto/create-city.dto';
import { City, CityDocument } from './schemas/city.schema';
import { Location, LocationDocument } from './schemas/location.schema';

@Injectable()
export class CitiesService {
  constructor(
    @InjectModel(City.name) private cityModel: Model<CityDocument>,
    @InjectModel(Location.name) private locationModel: Model<LocationDocument>,
  ) {}

  async create(createCityDto: CreateCityDto) {
    const cond = await this.cityModel.findOne({ name: createCityDto.name });
    if (cond) {
      console.log(cond);
      throw new HttpException(
        `Город '${createCityDto.name}' уже есть!`,
        HttpStatus.BAD_REQUEST,
      );
    }
    const location = await this.locationModel.create(createCityDto.location);
    if (location)
      return await this.cityModel.create({
        name: createCityDto.name,
        location: location._id,
        hotels: [],
      });
  }

  async findAll() {
    return await this.cityModel.find().exec();
  }

  async findOne(id: string) {
    const result = await this.cityModel.findById(id);
    if (!result) {
      throw new HttpException(
        `Такого города с id: ${id} в базе нет!`,
        HttpStatus.NOT_FOUND,
      );
    }
    return result;
  }

  async findLocationById(id: string) {
    const result = await this.locationModel.findById(id);
    if (!result) {
      throw new HttpException(
        `Такого location с id: ${id} в базе нет!`,
        HttpStatus.NOT_FOUND,
      );
    }
    return result;
  }
}
