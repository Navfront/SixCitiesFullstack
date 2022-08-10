import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from './../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    UsersModule,
    JwtModule.register({
      privateKey: 'secret',
      signOptions: {
        expiresIn: '5m',
      },
    }),
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
