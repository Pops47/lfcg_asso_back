import { Injectable } from '@nestjs/common';
import { Profile } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProfileDto: CreateProfileDto): Promise<Profile> {
    return this.prisma.profile.create({
      data: createProfileDto,
    });
  }

  async findAll(): Promise<Profile[]> {
    return this.prisma.profile.findMany();
  }

  async findOne(userId: string): Promise<Profile> {
    return this.prisma.profile.findUnique({
      where: { userId },
    });
  }

  async update(
    userId: string,
    updateProfileDto: UpdateProfileDto,
  ): Promise<Profile> {
    return this.prisma.profile.update({
      where: { userId },
      data: updateProfileDto,
    });
  }

  async remove(userId: string): Promise<Profile> {
    return this.prisma.profile.delete({
      where: { userId },
    });
  }
}
