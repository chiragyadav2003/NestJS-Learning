import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty({
    description: 'user email',
    default: "johndoe@gmail.com",
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'user password',
    default: "password123",
  })
  @IsNotEmpty()
  password: string;
}