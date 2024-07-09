import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  // injecting the userService into the controller
  constructor(private userService: UserService) { }

  @Get()
  get() {
    return this.userService.getUser();
  }

  @Post()
  create(@Body() body: CreateUserDto) {
    return this.userService.createUser(body);
  }

  @Patch('/:userId')
  update(@Param() param: { userId: number }, @Body() body: UpdateUserDto) {
    return this.userService.updateUser(body, param)
  }

  @Get('/:userId')
  getUser(@Param() param: { userId: number }) {
    return this.userService.getUserById(param)
  }

  @Delete('/:userId')
  delete(@Param() param: { userId: number }) {
    return this.userService.deleteUser(param)
  }
}
