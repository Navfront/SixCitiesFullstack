import { Injectable } from '@nestjs/common';
import { ReqUser } from './auth/jwt-auth.guard';

@Injectable()
export class AppService {
  async greeting(user: ReqUser) {
    return { message: `Hello ${user.username || 'Anonimous'}!` };
  }
}
