import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { Badge } from '@prisma/client';
import { BadgesService } from './badges.service';
import { CreateBadgeDto } from './dto/create-badge.dto';
import { UpdateBadgeDto } from './dto/update-badge.dto';

@Controller('badges')
export class BadgesController {
  constructor(private readonly badgesService: BadgesService) {}

  @Post()
  async create(@Body() createBadgeDto: CreateBadgeDto): Promise<Badge> {
    return this.badgesService.create(createBadgeDto);
  }

  @Patch('user/:userId/task/:taskId')
  async update(
    @Param('userId') userId: string,
    @Param('taskId') taskId: string,
    @Body() updateBadgeDto: UpdateBadgeDto,
  ): Promise<Badge> {
    return this.badgesService.update(userId, +taskId, updateBadgeDto);
  }

  @Delete('user/:userId/task/:taskId')
  async remove(
    @Param('userId') userId: string,
    @Param('taskId') taskId: string,
  ): Promise<Badge> {
    return this.badgesService.remove(userId, +taskId);
  }
}
