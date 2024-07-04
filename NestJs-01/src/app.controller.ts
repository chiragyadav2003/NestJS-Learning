import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class AppController {
  @Get()
  checkApp() {
    return 'This is the root of the app';
  }
}