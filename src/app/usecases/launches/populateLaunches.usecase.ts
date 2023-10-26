import { Injectable } from '@nestjs/common';
import { SpaceXLaunchToDomainLaunchMapper } from './../../../domain/mappers/spaceXLaunchToDomainLaunch.mapper';
import { LaunchesService } from '../../../domain/services/launches.service';
import { SpaceXApiService } from '../../../infra/services/spaceXApi.service';
import { RocketsService } from '../../../domain/services/rockets.service';

@Injectable()
export class PopulateLaunchesUsecase {
  constructor(
    private readonly launchesService: LaunchesService,
    private readonly spaceXApiService: SpaceXApiService,
    private readonly rocketsService: RocketsService,
  ) {}

  async handle() {
    try {
      const [spaceXLaunches, launches, rockets] = await Promise.all([
        this.spaceXApiService.getAllLaunches(),
        this.launchesService.getAllLaunches(),
        this.rocketsService.getAllRockets(),
      ]);

      const rocketsIds = new Set(rockets.map((r) => r.externalId));
      const storedLaunchesIds = new Set(launches.map((r) => r.externalId));
      const launchesToStore = spaceXLaunches
        .filter((r) => !storedLaunchesIds.has(r.id) && rocketsIds.has(r.rocket))
        .map(SpaceXLaunchToDomainLaunchMapper);

      if (launchesToStore.length > 0) {
        await this.launchesService.createLaunches({ data: launchesToStore });
      }
    } catch (error) {
      console.error(error);
    }
  }
}
