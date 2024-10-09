import { Injectable } from '@nestjs/common';
import { Badge } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBadgeDto } from './dto/create-badge.dto';
import { UpdateBadgeDto } from './dto/update-badge.dto';

@Injectable()
export class BadgesService {
  constructor(private prisma: PrismaService) {}

  async create(createBadgeDto: CreateBadgeDto): Promise<Badge> {
    return this.prisma.badge.create({ data: createBadgeDto });
  }

  async update(
    userId: string,
    taskId: number,
    updateBadgeDto: UpdateBadgeDto,
  ): Promise<Badge> {
    return this.prisma.badge.update({
      where: {
        userId_taskId: { userId, taskId },
      },
      data: updateBadgeDto,
    });
  }

  async remove(userId: string, taskId: number): Promise<Badge> {
    return this.prisma.badge.delete({
      where: {
        userId_taskId: { userId, taskId },
      },
    });
  }
}
