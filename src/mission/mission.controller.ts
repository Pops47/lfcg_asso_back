import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Mission } from '@prisma/client';
import { CreateMissionDto } from './dto/create-mission.dto';
import { UpdateMissionDto } from './dto/update-mission.dto';
import { MissionService } from './mission.service';

@Controller('mission')
export class MissionController {
  constructor(private readonly missionService: MissionService) {}

  @Post()
  async create(@Body() createMissionDto: CreateMissionDto): Promise<Mission> {
    return this.missionService.create(createMissionDto);
  }

  @Get()
  async findAll(): Promise<Mission[]> {
    return this.missionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Mission> {
    return this.missionService.findOneById(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMissionDto: UpdateMissionDto,
  ): Promise<Mission> {
    return this.missionService.update(+id, updateMissionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Mission> {
    return this.missionService.remove(+id);
  }
}
