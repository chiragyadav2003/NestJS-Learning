import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) { }

  @Post('/login')
  async login(@Body() loginDto: any) {
    const user = await this.userService.getUserByEmail(loginDto.email);
    if (user) {
      if (user.password === loginDto.password) {
        return {
          message: "login successful",
          success: true
        }
      }
      return {
        message: "wrong password",
        success: false
      }
    }
    return {
      message: "user not found",
      success: false
    }
  }
}
