import { Injectable } from '@nestjs/common';
import { Participation } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateParticipationDto } from './dto/create-participation.dto';

@Injectable()
export class ParticipationService {
  constructor(private prisma: PrismaService) {}

  async create(
    createParticipationDto: CreateParticipationDto,
  ): Promise<Participation> {
    return this.prisma.participation.create({
      data: createParticipationDto,
    });
  }

  async remove(userId: string, missionId: number): Promise<Participation> {
    return this.prisma.participation.delete({
      where: {
        userId_missionId: { userId, missionId },
      },
    });
  }
}
