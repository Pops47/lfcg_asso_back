import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateLocationDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  address: string;
  @IsNotEmpty()
  @IsString()
  @Length(5)
  postalCode: string;
  @IsNotEmpty()
  @IsString()
  @Length(100)
  city: string;
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  latitude: number;
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  longitude: number;
}
