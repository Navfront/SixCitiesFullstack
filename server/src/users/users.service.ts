import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import appModel from 'src/app.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
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
}
