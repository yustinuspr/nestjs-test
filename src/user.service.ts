import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHelloUser(user: string): string {
    return `Hello ${user ? user : 'World'}!`;
  }
}
