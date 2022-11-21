import { Module } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { FavoritesController } from './favorites.controller';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/schemas/user.schema';
import { Hotel, HotelSchema } from 'src/hotels/schemas/hotel.schema';

@Module({
  controllers: [FavoritesController],
  providers: [FavoritesService],
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    JwtModule.register({
      privateKey: process.env.SECRET || 'secret',
      signOptions: {
        expiresIn: '5m',
      },
    }),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Hotel.name, schema: HotelSchema },
    ]),
  ],
})
export class FavoritesModule {}
