import { Body, Controller, Post, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateClickDto } from './dto/create-click-mdb.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/click')
  createClick(@Body() dto: CreateClickDto) {
    return this.userService.createClick(dto);
  }

  @Get('/clicks')
  getClicks() {
    return this.userService.getClicks();
  }
}
