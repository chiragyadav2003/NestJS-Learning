import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  // injecting the userService into the controller
  constructor(private userService: UserService) { }

  @Get()
  get() {
    return this.userService.getUser();
  }

  @Post()
  store(@Body() body: any) {
    return this.userService.storeUser(body);
  }

  @Patch('/:userId')
  update(@Param() params: { userId: number }, @Body() body: any) {
    return this.userService.updateUser(body, params.userId)
  }

  @Get('/:userId')
  getUser(@Param() param: { userId: number }) {
    return this.userService.getUserById(param.userId)
  }
}
