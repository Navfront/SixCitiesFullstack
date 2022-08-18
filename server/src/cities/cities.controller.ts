import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CitiesService } from './cities.service';
import { CreateCityDto } from './dto/create-city.dto';

@ApiTags('Cities')
@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @ApiOperation({ summary: 'Создаем город' })
  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() createCityDto: CreateCityDto) {
    console.log('create city', createCityDto.name);
    return await this.citiesService.create(createCityDto);
  }
  @ApiOperation({ summary: 'Получить все города' })
  @Get()
  async findAll() {
    return await this.citiesService.findAll();
  }
  @ApiOperation({ summary: 'Получить город по citiId' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.citiesService.findOne(id);
  }
  @ApiOperation({ summary: 'Получить данные о местоположении по locationId' })
  @Get('/location/:id')
  async findLocationById(@Param('id') id: string) {
    return await this.citiesService.findLocationById(id);
  }
}
