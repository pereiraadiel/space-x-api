import { Module } from '@nestjs/common';
import { LaunchesController } from './presentation/controllers/launches.controller';
import { LaunchesService } from './domain/services/launches.service';
import { SpaceXApiService } from './infra/services/spaceXApi.service';
import { AxiosService } from './infra/services/axios.service';
import { LaunchesRepository } from './domain/repositories/launches.repository';
import { GetLaunchesWithPaginationUsecase } from './app/usecases/launches/getLaunchesWithPagination.usecase';
import { GetLaunchesStatsUsecase } from './app/usecases/launches/getLaunchesStats.usecase';

@Module({
  imports: [],
  controllers: [LaunchesController],
  providers: [
    LaunchesService,
    SpaceXApiService,
    AxiosService,
    LaunchesRepository,
    GetLaunchesWithPaginationUsecase,
    GetLaunchesStatsUsecase,
  ],
})
export class LaunchesModule {}
