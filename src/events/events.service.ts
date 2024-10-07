import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from '@prisma/client';

@Injectable()
export class EventsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createEventDto: CreateEventDto): Promise<Event> {
    return this.prisma.event.create({
      data: createEventDto,
    });
  }

  async findAll(): Promise<Event[]> {
    return this.prisma.event.findMany();
  }

  async findOneById(id: number): Promise<Event> {
    return this.prisma.event.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateEventDto: UpdateEventDto): Promise<Event> {
    return this.prisma.event.update({
      where: { id },
      data: updateEventDto,
    });
  }

  async remove(id: number): Promise<Event> {
    return this.prisma.event.delete({
      where: { id },
    });
  }
}
