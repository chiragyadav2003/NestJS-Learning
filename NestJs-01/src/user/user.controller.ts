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
  update(@Param() params: { userId: number }, @Req() req: Request) {
    return this.userService.updateUser(req, params.userId)
  }

  @Get('/:userId')
  getUser(@Param() param: { userId: number }) {
    return this.userService.getUserById(param.userId)
  }
}
