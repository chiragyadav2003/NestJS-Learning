import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ADMIN' | 'ENGINEER') {
    if (role) {
      return { passedRole: role };
    }
    return 'I am from findAll';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post()
  create(@Body() user: { name: 'string' }) {
    return user;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() user: { name: string }) {
    return { patchId: id, ...user };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return { deleteId: id };
  }
}
