import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class UpdateUserDto {
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