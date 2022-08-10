import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import appModel from 'src/app.model';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserMDBDto } from './dto/create-user-mdb.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

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

  async createDBUser(userDto: CreateUserMDBDto) {
    return await this.userModel.create(userDto);
  }
}
