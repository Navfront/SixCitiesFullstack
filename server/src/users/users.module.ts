import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { ClickSchema, Click } from './schemas/click.schema';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
  imports: [
    JwtModule,
    MongooseModule.forFeature([{ name: Click.name, schema: ClickSchema }]),
  ],
})
export class UsersModule {}
