import { Injectable } from '@nestjs/common';
import { Request } from 'express';

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
  storeUser(req: Request) {
    return {
      message: 'User stored successfully',
      data: req.body
    }
  }

}
