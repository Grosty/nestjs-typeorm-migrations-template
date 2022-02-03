import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersService } from './modules/users/users.module';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly usersService: UsersService,
  ) {}

  @Get()
  getHello(): string {
    return 'Whattt!@  23434 !';
  }

  @Post('add')
  async createUser() {
    console.log(111);
    return await this.usersService.createUser();
  }
}
