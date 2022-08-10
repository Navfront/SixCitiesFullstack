import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './../users/dto/create-user.dto';
import { UsersService } from './../users/users.service';
import appModel from '../app.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  // Проверяем пользователя и отдаем токен
  async login(userDto: CreateUserDto) {
    const user = await this.validateUser(userDto);
    return this.generateToken(user.username, user.userId);
  }

  // Регистрируем нового пользователя и отдаем токен
  async registration(userDto: CreateUserDto) {
    const condidate = await appModel.findUserByName(userDto.login);
    if (condidate) {
      throw new HttpException(
        'Пользователь с таким login уже есть!',
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashPassword = await bcrypt.hash(userDto.password, 5);
    const user = await this.userService.createUser({
      ...userDto,
      password: hashPassword,
    });
    if (user) {
      return this.generateToken(user.username, user.userId);
    }

    throw new HttpException('Ошибка сервера', HttpStatus.INTERNAL_SERVER_ERROR);
  }

  // Генерируем токен по имени и ид пользователя
  private async generateToken(username: string, userId: string) {
    const payload = { username, userId };
    return {
      token: this.jwtService.sign(payload, {
        secret: process.env.SECRET || 'secret',
      }),
    };
  }

  // Проверяем пришедшие данные с теми что в базе и отдаем данные бд-пользователя
  private async validateUser(userDto: CreateUserDto) {
    const user = await appModel.findUserByName(userDto.login);
    if (!user) {
      throw new UnauthorizedException({ message: 'Неккоректный логин!' });
    }
    const passwordEquals = await bcrypt.compare(
      userDto.password,
      user.password,
    );

    if (user && passwordEquals) {
      return user;
    }
    throw new UnauthorizedException({
      message: 'Неккоректный пароль!',
    });
  }
}
