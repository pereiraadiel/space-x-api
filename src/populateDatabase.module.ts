import { Module } from '@nestjs/common';
import { PopulateLaunchesUsecase } from './app/usecases/launches/populateLaunches.usecase';
import { PopulateRocketsUsecase } from './app/usecases/rockets/populateRockets.usecase';
import { RocketsService } from './domain/services/rockets.service';
import { LaunchesModule } from './launches.module';
import { ROCKETS_REPOSITORY } from './domain/repositories/rockets.repository';
import { RocketsConcreteRepository } from './infra/repositories/rocketsConcrete.repository';
import { PopulateEmptyDatabaseService } from './infra/services/populateEmptyDatabase.service';

@Module({
  imports: [LaunchesModule],
  providers: [
    PopulateEmptyDatabaseService,
    PopulateLaunchesUsecase,
    PopulateRocketsUsecase,
    RocketsService,
    {
      provide: ROCKETS_REPOSITORY,
      useClass: RocketsConcreteRepository,
    },
  ],
})
export class PopulateDatabaseModule {}
