import { Controller, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';

@Controller('user')
export class UserController {
  // injecting the userService into the controller
  constructor(private userService: UserService) { }

  @Get()
  get() {
    return this.userService.getUser();
  }

  @Post()
  store(@Req() req: Request) {
    return this.userService.storeUser(req);
  }

  @Patch('/:userId')
  updateUser(@Param() params: { userId: number }) {
    return {
      message: 'Patch request received',
      userId: params.userId
    }
  }

  @Get('/:userId')
  getUserId(@Param() params: { userId: number }) {
    return params;
  }
}
