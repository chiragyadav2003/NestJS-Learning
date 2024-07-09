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
      message: 'User stored successfully',
      data: body
    }
  }

  // update user by userId
  updateUser(body: UpdateUserDto, param: { userId: number }) {
    return {
      message: 'User updated successfully',
      userId: param.userId,
      data: body
    }
  }

  //get user by userId
  getUserById(param: { userId: number }) {
    return {
      message: "User fetched successfully",
      userId: param.userId
    }
  }

  //delete user by userId
  deleteUser(param: { userId: number }) {
    return {
      message: "User deleted successfully",
      userId: param.userId
    }
  }

}
