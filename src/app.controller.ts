import { Controller, Get, Post } from '@nestjs/common';

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
  storeUser() {
    return {
      message: 'User stored successfully!'
    }
  }
}