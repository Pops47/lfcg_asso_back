import { PartialType } from '@nestjs/mapped-types';
import { UserRoleEnum, UserStatusEnum } from '@prisma/client';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  role?: UserRoleEnum;
  status?: UserStatusEnum;
}
