import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('/login')
  login(@Body() loginDto: any) {
    return this.authService.validateUser(loginDto.email, loginDto.password);
  }
}
