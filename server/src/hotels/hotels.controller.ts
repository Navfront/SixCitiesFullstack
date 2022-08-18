import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ValidationPipe,
  UsePipes,
  UseGuards,
  Request,
} from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IsAdminGuard } from 'src/auth/is-admin.guard';

@ApiTags('Hotels')
@Controller('hotels')
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) {}

  @UseGuards(IsAdminGuard)
  @ApiOperation({ summary: 'Новый отель' })
  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() createHotelDto: CreateHotelDto, @Request() req) {
    return await this.hotelsService.create(createHotelDto, req);
  }

  @ApiOperation({ summary: 'Ближайшие отели к hotelId' })
  @Get('/:id/nearby')
  async findAllNearBy(@Param('id') id: string) {
    return await this.hotelsService.findAllNearBy(id);
  }

  @ApiOperation({ summary: 'Отели по cityId' })
  @Get('/city/:id')
  async findAllByCityId(@Param('id') id: string) {
    return await this.hotelsService.findAllByCityId(id);
  }

  @ApiOperation({ summary: 'Отель по hotelId' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.hotelsService.findOne(id);
  }
}
