import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Profile } from '@prisma/client';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfileService } from './profiles.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profilesService: ProfileService) {}

  @Post()
  async create(@Body() createProfileDto: CreateProfileDto): Promise<Profile> {
    return this.profilesService.create(createProfileDto);
  }

  @Get()
  async findAll(): Promise<Profile[]> {
    return this.profilesService.findAll();
  }

  @Get(':userId')
  async findOne(@Param('userId') userId: string): Promise<Profile> {
    return this.profilesService.findOne(userId);
  }

  @Patch(':userId')
  async update(
    @Param('userId') userId: string,
    @Body() updateProfileDto: UpdateProfileDto,
  ): Promise<Profile> {
    return this.profilesService.update(userId, updateProfileDto);
  }

  @Delete(':userId')
  async remove(@Param('userId') userId: string): Promise<Profile> {
    return this.profilesService.remove(userId);
  }
}
