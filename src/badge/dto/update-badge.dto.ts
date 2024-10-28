import { OmitType, PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { CreateBadgeDto } from './create-badge.dto';

export class UpdateBadgeDto extends PartialType(
  OmitType(CreateBadgeDto, ['userId', 'taskId'] as const),
) {
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  level?: number;
}
