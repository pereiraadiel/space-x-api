import { Injectable } from '@nestjs/common';
import { LaunchesService } from '../../../domain/services/launches.service';
import { LaunchesToLaunchesByYearMapper } from '../../../domain/mappers/launchesToLaunchesByYear.mapper';

@Injectable()
export class GetLaunchesStatsUsecase {
  constructor(private readonly launchesService: LaunchesService) {}

  async handle() {
    try {
      const [launches] = await Promise.all([
        this.launchesService.getAllLaunches(),
      ]);

      const launchesByYear = LaunchesToLaunchesByYearMapper(launches);

      return {
        launchesByYear,
      };
    } catch (error) {}
  }
}
