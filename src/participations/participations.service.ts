import { Injectable } from '@nestjs/common';
import { Participation } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDeleteParticipationDto } from './dto/create-delete-participation.dto';

@Injectable()
export class ParticipationsService {
  constructor(private prisma: PrismaService) {}

  async create(
    createDeleteParticipationDto: CreateDeleteParticipationDto,
  ): Promise<Participation> {
    return this.prisma.participation.create({
      data: createDeleteParticipationDto,
    });
  }

  async findAll(): Promise<Participation[]> {
    return this.prisma.participation.findMany();
  }

  async findByUser(userId: string): Promise<Participation[]> {
    return this.prisma.participation.findMany({
      where: { userId },
    });
  }

  async findByMission(missionId: number): Promise<Participation[]> {
    return this.prisma.participation.findMany({
      where: { missionId },
    });
  }

  async remove(
    createDeleteParticipationDto: CreateDeleteParticipationDto,
  ): Promise<Participation> {
    return this.prisma.participation.delete({
      where: {
        userId_missionId: createDeleteParticipationDto,
      },
    });
  }
}
