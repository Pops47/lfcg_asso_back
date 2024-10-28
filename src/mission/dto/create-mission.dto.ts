import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateMissionDto {
  @IsNotEmpty()
  @IsNumber()
  eventId: number;
  @IsNotEmpty()
  @IsNumber()
  taskId: number;
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  volunteersNeeded?: number;
}
