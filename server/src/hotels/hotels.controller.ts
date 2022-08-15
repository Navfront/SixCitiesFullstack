import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ValidationPipe,
  UsePipes,
  UseGuards,
} from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IsAdminGuard } from 'src/auth/is-admin.guard';

@ApiTags('Controllers')
@Controller('hotels')
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) {}

  @UseGuards(IsAdminGuard)
  @ApiOperation({ summary: 'Новый отель' })
  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() createHotelDto: CreateHotelDto) {
    return this.hotelsService.create(createHotelDto);
  }

  @Get('/city/:id')
  async findAllByCityId(@Param('id') id: string) {
    return await this.hotelsService.findAllByCityId(id);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.hotelsService.findOne(id);
  }
}
