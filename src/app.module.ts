import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BadgeModule } from './badge/badge.module';
import { EventModule } from './event/events.module';
import { LocationModule } from './location/location.module';
import { MissionModule } from './mission/mission.module';
import { ParticipationModule } from './participation/participation.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProfileModule } from './profile/profiles.module';
import { TaskModule } from './task/task.module';
import { UserModule } from './users/user.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    PrismaModule,
    BadgeModule,
    EventModule,
    MissionModule,
    ParticipationModule,
    ProfileModule,
    TaskModule,
    UserModule,
    LocationModule,
    AuthModule,
  ],
})
export class AppModule {}
