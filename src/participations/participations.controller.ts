import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateDeleteParticipationDto } from './dto/create-delete-participation.dto';
import { ParticipationsService } from './participations.service';

@Controller('participations')
export class ParticipationsController {
  constructor(private readonly participationsService: ParticipationsService) {}

  @Post()
  create(@Body() createDeleteParticipationDto: CreateDeleteParticipationDto) {
    return this.participationsService.create(createDeleteParticipationDto);
  }

  @Get()
  findAll() {
    return this.participationsService.findAll();
  }

  @Get('user/:userId')
  findByUser(@Param('userId') userId: string) {
    return this.participationsService.findByUser(userId);
  }

  @Get('mission/:missionId')
  findByMission(@Param('missionId') missionId: string) {
    return this.participationsService.findByMission(+missionId);
  }

  @Delete()
  remove(@Body() createDeleteParticipationDto: CreateDeleteParticipationDto) {
    return this.participationsService.remove(createDeleteParticipationDto);
  }
}
