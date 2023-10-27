import { Injectable } from '@nestjs/common';
import { PopulateRocketsUsecase } from '../../app/usecases/rockets/populateRockets.usecase';
import { PopulateLaunchesUsecase } from '../../app/usecases/launches/populateLaunches.usecase';
import { LaunchesService } from '../../domain/services/launches.service';
import { RocketsService } from '../../domain/services/rockets.service';

@Injectable()
export class PopulateEmptyDatabaseService {
  constructor(
    private readonly populateRockets: PopulateRocketsUsecase,
    private readonly populateLaunches: PopulateLaunchesUsecase,
    private readonly launchesService: LaunchesService,
    private readonly rocketsService: RocketsService,
  ) {}

  async execute() {
    const [rocketsCount, launchesCount] = await Promise.all([
      await this.rocketsService.countAllRockets(),
      await this.launchesService.countLaunches({}),
    ]);

    if (rocketsCount === 0 && launchesCount === 0) {
      this.populateRockets.handle().then(() => this.populateLaunches.handle());
    }
  }
}
