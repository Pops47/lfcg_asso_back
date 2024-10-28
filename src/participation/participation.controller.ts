import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { Participation } from '@prisma/client';
import { CreateParticipationDto } from './dto/create-participation.dto';
import { ParticipationService } from './participation.service';

@Controller('participation')
export class ParticipationController {
  constructor(private readonly participationService: ParticipationService) {}

  @Post()
  async create(
    @Body() createParticipationDto: CreateParticipationDto,
  ): Promise<Participation> {
    return this.participationService.create(createParticipationDto);
  }

  @Delete('user/:userId/mission/:missionId')
  async remove(
    @Param('userId') userId: string,
    @Param('missionId') missionId: string,
  ): Promise<Participation> {
    return this.participationService.remove(userId, +missionId);
  }
}
