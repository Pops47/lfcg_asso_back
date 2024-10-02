import { PartialType } from '@nestjs/mapped-types';
import { EventStatusEnum } from '@prisma/client';
import { CreateEventDto } from './create-event.dto';

export class UpdateEventDto extends PartialType(CreateEventDto) {
  status?: EventStatusEnum;
}
