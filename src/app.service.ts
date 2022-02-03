import { Injectable } from '@nestjs/common';
import { UsersService } from './modules/users/users.module';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    return 'Hello Worlddddd!';
  }
}
