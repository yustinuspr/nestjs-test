import { Injectable } from '@nestjs/common';
import { UserDto } from './user-dto';

@Injectable()
export class UserService {
  getHelloUser(user: string): string {
    return `Hello ${user ? user : 'World'}!`;
  }

  submitHelloUser(userDto: UserDto): string {
    return `Hello user ${userDto.name}`;
  }
}
