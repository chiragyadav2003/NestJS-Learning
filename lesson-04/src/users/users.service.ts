import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Chirag Yadav',
      email: 'chirag@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      email: 'priya@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 3,
      name: 'Rahul Mehta',
      email: 'rahul@gmail.com',
      role: 'INTERN',
    },
    {
      id: 4,
      name: 'Anjali Singh',
      email: 'anjali@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 5,
      name: 'Vikram Patel',
      email: 'vikram@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 6,
      name: 'Ritu Verma',
      email: 'ritu@gmail.com',
      role: 'INTERN',
    },
    {
      id: 7,
      name: 'Suresh Kumar',
      email: 'suresh@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 8,
      name: 'Neha Agarwal',
      email: 'neha@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 9,
      name: 'Arjun Rao',
      email: 'arjun@gmail.com',
      role: 'INTERN',
    },
    {
      id: 10,
      name: 'Deepak Gupta',
      email: 'deepak@gmail.com',
      role: 'ENGINEER',
    },
  ];

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      const roleUsers = this.users.filter((user) => user.role === role);
      return roleUsers;
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  create(user: {
    name: string;
    email: string;
    role: 'INTERN' | 'ENGINEER' | 'ADMIN';
  }) {
    const userByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: userByHighestId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number,
    updatedUser: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser }; //return updated user
      }
      return user; //return unchanged user
    });
    console.log('Hi');
    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
