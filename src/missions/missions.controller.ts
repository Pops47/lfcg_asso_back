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
import { MissionsService } from './missions.service';

@Controller('missions')
export class MissionsController {
  constructor(private readonly missionsService: MissionsService) {}

  @Post()
  async create(@Body() createMissionDto: CreateMissionDto): Promise<Mission> {
    return this.missionsService.create(createMissionDto);
  }

  @Get()
  async findAll(): Promise<Mission[]> {
    return this.missionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Mission> {
    return this.missionsService.findOneById(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMissionDto: UpdateMissionDto,
  ): Promise<Mission> {
    return this.missionsService.update(+id, updateMissionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Mission> {
    return this.missionsService.remove(+id);
  }
}
