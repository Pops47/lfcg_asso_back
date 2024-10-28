import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { Badge } from '@prisma/client';
import { BadgeService } from './badge.service';
import { CreateBadgeDto } from './dto/create-badge.dto';
import { UpdateBadgeDto } from './dto/update-badge.dto';

@Controller('badge')
export class BadgeController {
  constructor(private readonly badgeService: BadgeService) {}

  @Post()
  async create(@Body() createBadgeDto: CreateBadgeDto): Promise<Badge> {
    return this.badgeService.create(createBadgeDto);
  }

  @Patch('user/:userId/task/:taskId')
  async update(
    @Param('userId') userId: string,
    @Param('taskId') taskId: string,
    @Body() updateBadgeDto: UpdateBadgeDto,
  ): Promise<Badge> {
    return this.badgeService.update(userId, +taskId, updateBadgeDto);
  }

  @Delete('user/:userId/task/:taskId')
  async remove(
    @Param('userId') userId: string,
    @Param('taskId') taskId: string,
  ): Promise<Badge> {
    return this.badgeService.remove(userId, +taskId);
  }
}
