import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BadgesModule } from './badges/badges.module';
import { EventsModule } from './events/events.module';
import { MissionsModule } from './missions/missions.module';
import { ParticipationsModule } from './participations/participations.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProfilesModule } from './profiles/profiles.module';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { LocationModule } from './location/location.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    PrismaModule,
    BadgesModule,
    EventsModule,
    MissionsModule,
    ParticipationsModule,
    ProfilesModule,
    TasksModule,
    UsersModule,
    LocationModule,
  ],
})
export class AppModule {}
