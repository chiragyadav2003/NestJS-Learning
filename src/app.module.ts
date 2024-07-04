import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserController } from './user/user.controller';

@Module({
  controllers: [UserController, AppController]
})
export class AppModule { }