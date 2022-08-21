import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './../users/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/users/schemas/user.schema';
import { Model } from 'mongoose';
import { LoginUserDto } from 'src/users/dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {
    userModel.findOne({ email: 'ya@ya.ru' }).then((admin) => {
      if (!admin) {
        userModel.create({
          email: 'ya@ya.ru',
          password:
            process.env.ADMIN_PASSWORD ||
            '$2b$05$x9RcJi6OtRY14/w/BMP1Aexs89OjsmXmlIvtq6QC0ikYIpxFg2aaK',
          username: 'Admin',
          is_pro: true,
          avatar_url: '',
          role: 'admin',
          favorites: [],
        });
        console.log('Created new admin');
      } else {
        console.log('Admin is there!');
      }
    });
  }

  // Проверяем пользователя и отдаем токен
  async login(userDto: LoginUserDto) {
    const user = await this.validateUser({ ...userDto, username: '' });
    const result = {
      ...(await this.generateToken(user.email, user._id, user.role)),
      userId: user._id,
      email: user.email,
      username: user.username,
      role: user.role,
    };

    return result;
  }

  // Регистрируем нового пользователя и отдаем токен
  async registration(userDto: CreateUserDto) {
    const condidate = await this.userModel.findOne({ email: userDto.email });
    if (condidate) {
      throw new HttpException(
        'Пользователь с таким email уже есть!',
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashPassword = await bcrypt.hash(userDto.password, 5);

    const user = await this.userModel.create({
      ...userDto,
      password: hashPassword,
      role: 'user',
      is_pro: false,
      avatar_url: '',
      favorites: [],
    });

    if (user) {
      const result = {
        ...(await this.generateToken(user.email, user._id, user.role)),
        userId: user._id,
        email: user.email,
        username: user.username,
      };

      return result;
    }

    throw new HttpException('Ошибка сервера', HttpStatus.INTERNAL_SERVER_ERROR);
  }

  // Генерируем токен по имени и ид пользователя
  private async generateToken(email: string, userId: string, role: string) {
    const payload = { email, userId, role };
    return {
      token: this.jwtService.sign(payload, {
        secret: process.env.SECRET || 'secret',
      }),
    };
  }

  // Проверяем пришедшие данные с теми что в базе и отдаем данные бд-пользователя
  private async validateUser(userDto: CreateUserDto) {
    const user = await this.userModel.findOne({ email: userDto.email });
    if (!user) {
      throw new UnauthorizedException({ message: 'Неккоректный email!' });
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
