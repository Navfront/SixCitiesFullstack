import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

export type ReqUser = {
  username: string;
  userId: string;
  iat: number;
  exp: number;
};

@Injectable()
export class IsAdminGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req: Request & { user: ReqUser } = context
      .switchToHttp()
      .getRequest();
    try {
      const authHeader = req.headers.authorization;
      const bearer = authHeader.split(' ')[0];
      const token = authHeader.split(' ')[1];
      console.log(authHeader);
      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException({
          message: 'Пользователь не авторизован!',
        });
      }
      const user = this.jwtService.verify(token, {
        secret: process.env.SECRET || 'secret',
      });
      console.log('admin= ', user);

      if (user.role === 'user') {
        throw new UnauthorizedException({
          message: 'У вас нет доступа!',
        });
      }

      req.user = user;
      return true;
    } catch (error) {
      throw new UnauthorizedException({
        message: 'Нет доступа!',
      });
    }
  }
}
