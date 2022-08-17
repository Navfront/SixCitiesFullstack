import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelsModule } from './hotels/hotels.module';
import { ReviewsModule } from './reviews/reviews.module';
import { CitiesModule } from './cities/cities.module';
import { FavoritesModule } from './favorites/favorites.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    MongooseModule.forRoot(
      process.env.MONGO || 'mongodb://localhost:27017/sixcities',
    ),
    // ConfigModule.forRoot({ envFilePath: '.env' }),
    JwtModule.register({
      secret: process.env.SECRET || 'secret',
      signOptions: {
        expiresIn: '5m',
      },
    }),
    AuthModule,
    UsersModule,
    TodosModule,
    HotelsModule,
    ReviewsModule,
    CitiesModule,
    FavoritesModule,
  ],
})
export class AppModule {}
