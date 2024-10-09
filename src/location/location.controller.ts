import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Location } from '@prisma/client';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post()
  async create(
    @Body() createLocationDto: CreateLocationDto,
  ): Promise<Location> {
    return this.locationService.create(createLocationDto);
  }

  @Get()
  async findAll(): Promise<Location[]> {
    return this.locationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Location> {
    return this.locationService.findOneById(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateLocationDto: UpdateLocationDto,
  ): Promise<Location> {
    return this.locationService.update(+id, updateLocationDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Location> {
    return this.locationService.remove(+id);
  }
}
