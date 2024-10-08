import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  IsUUID,
  Length,
  MaxLength,
} from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  userId: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  firstname: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  lastname: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 30)
  username: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  @MaxLength(255)
  avatarPath?: string;
}
