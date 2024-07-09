import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  // creating a method to fetch the user
  getUser() {
    return {
      name: 'John Doe',
      email: 'johndoe@gmail.com'
    }
  }

  // creating a method to store the user
  createUser(body: CreateUserDto) {
    return {
      data: body
    }
  }

  // update user by userId
  updateUser(body: UpdateUserDto, userId: number) {
    return {
      userId: userId,
      data: body
    }
  }

  //get user by userId
  getUserById(userId: number) {
    return { userId }
  }

  //delete user by userId
  deleteUser(userId: number) {
    return { userId }
  }

}
