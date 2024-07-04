import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  checkApp() {
    return 'This is the root of the app';
  }
}