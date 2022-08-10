import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { JwtModule } from '@nestjs/jwt';
@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
  imports: [JwtModule],
})
export class UsersModule {}
