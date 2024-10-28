import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { UserWithoutPassword } from 'src/utils/types/UserTypes';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<UserWithoutPassword> {
    return this.userService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<UserWithoutPassword[]> {
    return this.userService.findAll();
  }

  @Get('id/:id')
  async findOneById(@Param('id') id: string): Promise<UserWithoutPassword> {
    return this.userService.findOneById(id);
  }

  @Get('email/:email')
  async findOneByEmail(
    @Param('email') email: string,
  ): Promise<UserWithoutPassword> {
    return this.userService.findOneByEmail(email);
  }

  @Get('email/:email')
  async findOneByEmailwithPassword(
    @Param('email') email: string,
  ): Promise<User> {
    return this.userService.findOneByEmailWithPassword(email);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserWithoutPassword> {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<UserWithoutPassword> {
    return this.userService.remove(id);
  }
}
