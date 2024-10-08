import { Injectable } from '@nestjs/common';
import { Mission } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMissionDto } from './dto/create-mission.dto';
import { UpdateMissionDto } from './dto/update-mission.dto';

@Injectable()
export class MissionsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createMissionDto: CreateMissionDto): Promise<Mission> {
    return this.prisma.mission.create({
      data: createMissionDto,
    });
  }

  async findAll(): Promise<Mission[]> {
    return this.prisma.mission.findMany();
  }

  async findOneById(id: number): Promise<Mission> {
    console.log('🚀 ~ MissionsService ~ findOneById ~ id:', id);
    return this.prisma.mission.findUnique({
      where: { id },
    });
  }

  async update(
    id: number,
    updateMissionDto: UpdateMissionDto,
  ): Promise<Mission> {
    return this.prisma.mission.update({
      where: { id },
      data: updateMissionDto,
    });
  }

  async remove(id: number): Promise<Mission> {
    return this.prisma.mission.delete({
      where: { id },
    });
  }
}
