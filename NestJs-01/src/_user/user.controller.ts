import { Controller, Get, Param, Post, Req } from "@nestjs/common";

@Controller('/user')
export class UserController {
  @Get()
  getUser() {
    return {
      message: 'User fetched successfully!',
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
  getUserId(@Param() params: { userId: number }) {
    return params;
  }
}