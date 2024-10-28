import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  skillName?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  @Length(1, 255)
  skillImagePath?: string;
}
