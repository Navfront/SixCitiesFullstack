import { Injectable } from '@nestjs/common';
import { User } from 'src/users/schemas/user.schema';

@Injectable()
export class AppService {
  async greeting(user: User) {
    return { message: `Hello ${user.username || 'Anonimous'}!` };
  }
}
