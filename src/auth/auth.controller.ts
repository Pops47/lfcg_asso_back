import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { UserService } from 'src/users/user.service';
import { AuthService } from './auth.service';
import { SignUpOrLoginDto } from './dto/signup-login-dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('signup')
  async signup(@Body() formData: SignUpOrLoginDto) {
    const user = await this.userService.findOneByEmail(formData.email);
    if (user) {
      throw new HttpException('Email already exists', HttpStatus.FORBIDDEN);
    }
    const newUser = await this.userService.create({
      ...formData,
    });
    return { message: 'User Created', user: newUser };
  }

  @Post('signin')
  async login(@Body() formData: SignUpOrLoginDto) {
    const user = await this.userService.findOneByEmailWithPassword(
      formData.email,
    );
    if (!user || formData.password !== user.password) {
      throw new HttpException('Bad credentials', HttpStatus.FORBIDDEN);
    }
    return { message: 'User connected', user };
  }
}
