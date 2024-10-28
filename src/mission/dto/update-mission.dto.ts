import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateMissionDto } from './create-mission.dto';

export class UpdateMissionDto extends PartialType(
  OmitType(CreateMissionDto, ['eventId', 'taskId'] as const),
) {}
