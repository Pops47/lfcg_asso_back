import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MaxLength,
} from 'class-validator';

export class SignUpOrLoginDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @MaxLength(255)
  email: string;
  @IsNotEmpty()
  @IsString()
  @IsStrongPassword({ minLength: 8 })
  @MaxLength(255)
  password: string;
}
