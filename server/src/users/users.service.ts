import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import appModel from 'src/app.model';
import { CreateUserDto } from './dto/create-user.dto';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateClickDto } from './dto/create-click-mdb.dto';
import { Click, UserDocument } from './schemas/click.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Click.name) private clickModel: Model<UserDocument>,
  ) {}

  async getUserByLogin(login: string) {
    const user = await appModel.findUserByName(login);
    if (!user) {
      throw new HttpException('Пользователь не найден', HttpStatus.BAD_REQUEST);
    }
    return user;
  }

  async createUser(userData: CreateUserDto) {
    return await appModel.createUser({
      username: userData.login,
      password: userData.password,
    });
  }

  async createClick(clickDto: CreateClickDto) {
    const newClick = new this.clickModel(clickDto);
    return await newClick.save();
  }

  async getClicks() {
    return await this.clickModel.find().exec();
  }
}
