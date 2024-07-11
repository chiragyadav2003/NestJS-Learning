import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty({
    description: 'user name',
    default: "Chirag Yadav",
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'user email',
    default: "johndoe@gmail.com",
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'user password',
    default: "password",
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}