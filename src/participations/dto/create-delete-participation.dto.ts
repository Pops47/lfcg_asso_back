import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateDeleteParticipationDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  userId: string;
  @IsNotEmpty()
  @IsNumber()
  missionId: number;
}
