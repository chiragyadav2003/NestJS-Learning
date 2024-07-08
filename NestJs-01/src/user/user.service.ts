import { Injectable } from '@nestjs/common';

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
  storeUser(body: any) {
    return {
      message: 'User stored successfully',
      data: body
    }
  }

  // update user by userId
  updateUser(body: any, userId: number) {
    return {
      message: 'User updated successfully',
      userId: userId,
      data: body
    }
  }

  //get user by userId
  getUserById(userId: number) {
    return {
      message: "User fetched successfully",
      userId: userId
    }
  }

}
