import { IsEmail, IsEnum, IsString, IsNotEmpty } from 'class-validator';

enum RoleEnum {
  ADMIN = 'ADMIN',
  ENGINEER = 'ENGINEER',
  INTERN = 'INTERN',
}

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsEnum(RoleEnum, {
    message: 'Valid role required!',
  })
  role: 'ADMIN' | 'ENGINEER' | 'INTERN';
}
