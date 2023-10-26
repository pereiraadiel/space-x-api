import { Module } from '@nestjs/common';
import { CronService } from './infra/services/cron.service';
import { PopulateLaunchesUsecase } from './app/usecases/launches/populateLaunches.usecase';
import { PopulateRocketsUsecase } from './app/usecases/rockets/populateRockets.usecase';
import { RocketsService } from './domain/services/rockets.service';
import { LaunchesModule } from './launches.module';
import { ROCKETS_REPOSITORY } from './domain/repositories/rockets.repository';
import { RocketsConcreteRepository } from './infra/repositories/rocketsConcrete.repository';

@Module({
  imports: [LaunchesModule],
  providers: [
    CronService,
    PopulateLaunchesUsecase,
    PopulateRocketsUsecase,
    RocketsService,
    {
      provide: ROCKETS_REPOSITORY,
      useClass: RocketsConcreteRepository,
    },
  ],
})
export class CronModule {}
