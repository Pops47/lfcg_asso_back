import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserWithoutPassword } from 'src/utils/types/UserTypes';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<UserWithoutPassword> {
    return this.prisma.user.create({
      data: createUserDto,
      omit: {
        password: true,
      },
    });
  }

  async findAll(): Promise<UserWithoutPassword[]> {
    return this.prisma.user.findMany({
      omit: {
        password: true,
      },
    });
  }

  async findOneById(id: string): Promise<UserWithoutPassword> {
    return this.prisma.user.findUnique({
      where: { id },
      omit: {
        password: true,
      },
    });
  }

  async findOneByEmail(email: string): Promise<UserWithoutPassword> {
    return this.prisma.user.findUnique({
      where: { email },
      omit: {
        password: true,
      },
    });
  }

  async findOneByEmailWithPassword(email: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserWithoutPassword> {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
      omit: {
        password: true,
      },
    });
  }

  async remove(id: string): Promise<UserWithoutPassword> {
    return this.prisma.user.delete({
      where: { id },
      omit: {
        password: true,
      },
    });
  }
}
