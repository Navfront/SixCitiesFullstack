import {
  Controller,
  Get,
  Patch,
  Param,
  Request,
  UseGuards,
} from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { ReqUser, JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Favorites')
@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @ApiOperation({ summary: 'Получить массив всех отелей' })
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Request() req: ReqUser) {
    return await this.favoritesService.findAll(req);
  }

  @ApiOperation({ summary: 'УбратьДобавить отель в массив favorites у user' })
  @UseGuards(JwtAuthGuard)
  @Patch(':hotel_id/:status')
  async update(
    @Param('hotel_id') hotelId: string,
    @Param('status') status: string,
    @Request() req: ReqUser,
  ) {
    return await this.favoritesService.update(hotelId, status, req);
  }
}
