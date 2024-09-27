import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    try {
      return await this.prisma.user.create({ data: createUserDto });
    } catch (error) {
      console.log('🚀 ~ UsersService ~ create ~ error:', error);
    }
  }

  async findAll() {
    try {
      return await this.prisma.user.findMany({
        select: {
          id: true,
          email: true,
        },
      });
    } catch (error) {
      console.log('🚀 ~ UsersService ~ findAll ~ error:', error);
    }
  }

  async findOne(id: string) {
    try {
      return await this.prisma.user.findUnique({
        where: {
          id: id,
        },
        select: {
          id: true,
          email: true,
        },
      });
    } catch (error) {
      console.log('🚀 ~ UsersService ~ findOne ~ error:', error);
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      return await this.prisma.user.update({
        where: {
          id: id,
        },
        data: updateUserDto,
      });
    } catch (error) {
      console.log('🚀 ~ UsersService ~ findOne ~ error:', error);
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.user.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.log('🚀 ~ UsersService ~ findOne ~ error:', error);
    }
  }
}
