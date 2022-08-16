import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { Review, ReviewSchema } from './schemas/review.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { Hotel, HotelSchema } from 'src/hotels/schemas/hotel.schema';

@Module({
  controllers: [ReviewsController],
  providers: [ReviewsService],
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    MongooseModule.forFeature([
      { name: Review.name, schema: ReviewSchema },
      { name: Hotel.name, schema: HotelSchema },
    ]),
    JwtModule.register({
      privateKey: process.env.SECRET || 'secret',
      signOptions: {
        expiresIn: '5m',
      },
    }),
  ],
})
export class ReviewsModule {}
