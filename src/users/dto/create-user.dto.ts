import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @ApiProperty({
    example: 'test@mail.com',
    required: true,
  })
  email: string;
  @IsNotEmpty()
  @IsString()
  @IsStrongPassword({ minLength: 8 })
  @ApiProperty({
    example: 'Azerty1234!',
    required: true,
  })
  password: string;
}
