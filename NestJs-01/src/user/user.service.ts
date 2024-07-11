import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  createUser(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  updateUser(updateUserDto: UpdateUserDto, userId: number) {
    return this.userRepository.update(userId, updateUserDto);
  }

  getUserById(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  getUserByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  deleteUser(id: number) {
    return this.userRepository.delete(id)
  }
}
