import { Injectable } from '@nestjs/common';
import { Location } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Injectable()
export class LocationService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createLocationDto: CreateLocationDto): Promise<Location> {
    return this.prisma.location.create({
      data: createLocationDto,
    });
  }

  async findAll(): Promise<Location[]> {
    return this.prisma.location.findMany();
  }

  async findOneById(id: number): Promise<Location> {
    return this.prisma.location.findUnique({
      where: { id },
    });
  }

  async update(
    id: number,
    updateLocationDto: UpdateLocationDto,
  ): Promise<Location> {
    return this.prisma.location.update({
      where: { id },
      data: updateLocationDto,
    });
  }

  async remove(id: number): Promise<Location> {
    return this.prisma.location.delete({
      where: { id },
    });
  }
}
