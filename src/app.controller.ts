import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class AppController {
  @Get()
  getUser() {
    return {
      message: 'Hello World!',
      data: { name: 'John Doe', age: 30 }
    }
  }

  @Post()
  storeUser(@Req() req: Request) {
    console.log(req.body);
    return {
      message: 'User stored successfully!',
      data: req.body
    }
  }

  @Get('/:userId')
  getUserId(@Param('userId') userId: number) {
    return {
      message: 'User details',
      userId: userId
    };
  }
}