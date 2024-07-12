import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) { }

  async validateUser(email: string, password: string) {
    const user = await this.userService.getUserByEmail(email);
    if (user) {
      if (user.password === password) {
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
