import { Module } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { HotelsController } from './hotels.controller';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { Hotel, HotelSchema } from './schemas/hotel.schema';

@Module({
  controllers: [HotelsController],
  providers: [HotelsService],
  imports: [
    MongooseModule.forFeature([{ name: Hotel.name, schema: HotelSchema }]),
    JwtModule.register({
      privateKey: process.env.SECRET || 'secret',
      signOptions: {
        expiresIn: '5m',
      },
    }),
  ],
})
export class HotelsModule {}
