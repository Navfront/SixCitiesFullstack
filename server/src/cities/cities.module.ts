import { Module } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CitiesController } from './cities.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { City, CitySchema } from './schemas/city.schema';
import { LocationSchema, Location } from './schemas/location.schema';

@Module({
  controllers: [CitiesController],
  providers: [CitiesService],
  imports: [
    MongooseModule.forFeature([
      { name: City.name, schema: CitySchema },
      { name: Location.name, schema: LocationSchema },
    ]),
  ],
})
export class CitiesModule {}
