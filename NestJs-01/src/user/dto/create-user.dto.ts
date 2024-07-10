import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty({
    description: 'user name',
    default: "Chirag Yadav",
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'user email',
    default: "johndoe@gmail.com",
  })
  @IsEmail()
  email: string;
}