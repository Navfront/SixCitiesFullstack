import {
  Body,
  Controller,
  Post,
  Request,
  UseGuards,
  HttpException,
  HttpStatus,
  UsePipes,
} from '@nestjs/common';
import { GetUserByLogin } from './dto/get-user-by-login.dto';
import { UsersService } from './users.service';
// import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ValidationPipe } from './../pipes/validation.pipe';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserMDBDto } from './dto/create-user-mdb.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOperation({ summary: 'Получение юзера по ид' })
  @UseGuards(JwtAuthGuard)
  @Post('/')
  getUserByLogin(@Body() dto: GetUserByLogin, @Request() req) {
    if (dto.login !== req.user.username) {
      throw new HttpException(
        'Зачем тебе другие пользователи?',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.userService.getUserByLogin(dto.login);
  }

  @Post('/mcreate')
  createMUser(@Body() dto: CreateUserMDBDto) {
    return this.userService.createDBUser(dto);
  }

  // @ApiOperation({ summary: 'Создание нового юзера' })
  // @UseGuards(JwtAuthGuard)
  // @Post('/create')
  // createUser(@Body() dto: CreateUserDto) {
  //   return this.userService.createUser(dto);
  // }
}
