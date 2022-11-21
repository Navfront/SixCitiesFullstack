import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { ValidationPipe } from './../pipes/validation.pipe';
import { LoginUserDto } from 'src/users/dto/login-user.dto';

@ApiTags('Auth')
@Controller('/')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Авторизация' })
  @UsePipes(ValidationPipe)
  @Post('/login')
  login(@Body() dto: LoginUserDto) {
    console.log('login', dto);
    return this.authService.login(dto);
  }

  @ApiOperation({ summary: 'Регистрация' })
  @UsePipes(ValidationPipe)
  @Post('/registration')
  registration(@Body() dto: CreateUserDto) {
    console.log('registration', dto);

    return this.authService.registration(dto);
  }
}
