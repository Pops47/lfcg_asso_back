import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
} from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  title: string;
  @IsNotEmpty()
  @IsString()
  description: string;
  @IsNotEmpty()
  @IsDate()
  startDate: Date;
  @IsNotEmpty()
  @IsDate()
  endDate: Date;
  @IsNotEmpty()
  @IsNumber()
  locationId: number;
}
