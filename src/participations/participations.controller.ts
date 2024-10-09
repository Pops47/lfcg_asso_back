import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { Participation } from '@prisma/client';
import { CreateParticipationDto } from './dto/create-participation.dto';
import { ParticipationsService } from './participations.service';

@Controller('participations')
export class ParticipationsController {
  constructor(private readonly participationsService: ParticipationsService) {}

  @Post()
  async create(
    @Body() createParticipationDto: CreateParticipationDto,
  ): Promise<Participation> {
    return this.participationsService.create(createParticipationDto);
  }

  @Delete('user/:userId/mission/:missionId')
  async remove(
    @Param('userId') userId: string,
    @Param('missionId') missionId: string,
  ): Promise<Participation> {
    return this.participationsService.remove(userId, +missionId);
  }
}
