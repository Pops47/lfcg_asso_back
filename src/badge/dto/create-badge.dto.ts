import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateBadgeDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  userId: string;
  @IsNotEmpty()
  @IsNumber()
  taskId: number;
}
