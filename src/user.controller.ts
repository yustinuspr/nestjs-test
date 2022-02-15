import { UserService } from './user.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':userName')
  getHelloUser(@Param('userName') userName: string): string {
    return this.userService.getHelloUser(userName);
  }
}
