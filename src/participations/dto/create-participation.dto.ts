import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateParticipationDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  userId: string;
  @IsNotEmpty()
  @IsNumber()
  missionId: number;
}
