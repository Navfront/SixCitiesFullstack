import { Module } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { HotelsController } from './hotels.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [HotelsController],
  providers: [HotelsService],
  imports: [
    JwtModule.register({
      privateKey: process.env.SECRET || 'secret',
      signOptions: {
        expiresIn: '5m',
      },
    }),
  ],
})
export class HotelsModule {}
