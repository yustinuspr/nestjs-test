import { UserService } from './user.service';
import { UserDto } from './user-dto';
import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':userName')
  getHelloUser(@Param('userName') userName: string): string {
    return this.userService.getHelloUser(userName);
  }

  @Post('/submit')
  @HttpCode(200)
  submitHelloUser(@Body() userDto: UserDto): string {
    return this.userService.submitHelloUser(userDto);
  }
}
