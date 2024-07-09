import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class UpdateUserDto {
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