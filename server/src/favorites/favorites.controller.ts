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

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Request() req: ReqUser) {
    return await this.favoritesService.findAll(req);
  }

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
