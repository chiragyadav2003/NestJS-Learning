import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
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
  update(@Param('userId', ParseIntPipe) userId: number, @Body() body: UpdateUserDto) {
    return this.userService.updateUser(body, userId)
  }

  @Get('/:userId')
  getUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.getUserById(userId)
  }

  @Delete('/:userId')
  delete(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.deleteUser(userId)
  }
}
