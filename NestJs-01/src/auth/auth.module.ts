import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController],
  imports: [UserModule, PassportModule] // Import UserModule to use UserService in AuthService
})
export class AuthModule { }
