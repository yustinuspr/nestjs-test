import { Test, TestingModule } from '@nestjs/testing';

import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let userController: UserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    userController = app.get<UserController>(UserController);
  });

  describe('get user', () => {
    it('should return "Hello John Doe!"', () => {
      expect(userController.getHelloUser('John Doe')).toBe('Hello John Doe!');
    });
  });
});
