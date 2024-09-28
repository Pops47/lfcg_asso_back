import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProfileDto: CreateProfileDto) {
    try {
      return await this.prisma.profile.create({
        data: createProfileDto,
      });
    } catch (error) {
      console.log('🚀 ~ ProfilesService ~ create ~ error:', error);
    }
  }

  async findAll() {
    try {
      return await this.prisma.profile.findMany();
    } catch (error) {
      console.log('🚀 ~ ProfilesService ~ create ~ error:', error);
    }
  }

  async findOne(userId: string) {
    try {
      return await this.prisma.profile.findUnique({
        where: {
          userId: userId,
        },
      });
    } catch (error) {
      console.log('🚀 ~ ProfilesService ~ create ~ error:', error);
    }
  }

  async update(userId: string, updateProfileDto: UpdateProfileDto) {
    try {
      return await this.prisma.profile.update({
        where: {
          userId: userId,
        },
        data: updateProfileDto,
      });
    } catch (error) {
      console.log('🚀 ~ ProfilesService ~ create ~ error:', error);
    }
  }

  async remove(userId: string) {
    try {
      return await this.prisma.profile.delete({
        where: {
          userId: userId,
        },
      });
    } catch (error) {
      console.log('🚀 ~ ProfilesService ~ create ~ error:', error);
    }
  }
}
