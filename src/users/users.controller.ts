import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserWithoutPassword } from 'src/utils/types/UserTypes';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@ApiTags('User')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Create a user' })
  @ApiResponse({
    status: 200,
    description: 'User Created',
  })
  @Post()
  async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<UserWithoutPassword> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<UserWithoutPassword[]> {
    return this.usersService.findAll();
  }

  @Get('id/:id')
  async findOneById(@Param('id') id: string): Promise<UserWithoutPassword> {
    return this.usersService.findOneById(id);
  }

  @Get('email/:email')
  async findOneByEmail(
    @Param('email') email: string,
  ): Promise<UserWithoutPassword> {
    return this.usersService.findOneByEmail(email);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserWithoutPassword> {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<UserWithoutPassword> {
    return this.usersService.remove(id);
  }
}
