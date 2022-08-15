import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CreateCityDto } from './dto/create-city.dto';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Post()
  async create(@Body() createCityDto: CreateCityDto) {
    console.log('create city', createCityDto.name);

    return await this.citiesService.create(createCityDto);
  }

  @Get()
  async findAll() {
    return await this.citiesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.citiesService.findOne(id);
  }

  @Get('/location/:id')
  async findLocationById(@Param('id') id: string) {
    return await this.citiesService.findLocationById(id);
  }
}
