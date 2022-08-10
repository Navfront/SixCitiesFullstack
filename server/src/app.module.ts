import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://adminus:26BHnkmbzJghxpJk@cluster0.f3n7anj.mongodb.net/sixcities?retryWrites=true&w=majority',
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
  ],
})
export class AppModule {}
