import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { ValidationPipe } from './../pipes/validation.pipe';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Авторизация' })
  @UsePipes(ValidationPipe)
  @Post('/login')
  login(@Body() dto: CreateUserDto) {
    console.log('log', dto);
    return this.authService.login(dto);
  }

  @ApiOperation({ summary: 'Регистрация' })
  @UsePipes(ValidationPipe)
  @Post('/registration')
  registration(@Body() dto: CreateUserDto) {
    console.log('reg', dto);

    return this.authService.registration(dto);
  }
}
