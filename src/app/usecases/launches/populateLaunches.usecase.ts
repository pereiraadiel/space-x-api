import { Injectable } from '@nestjs/common';
import { SpaceXLaunchToDomainLaunchMapper } from './../../../domain/mappers/spaceXLaunchToDomainLaunch.mapper';
import { LaunchesService } from '../../../domain/services/launches.service';
import { SpaceXApiService } from '../../../infra/services/spaceXApi.service';

@Injectable()
export class PopulateLaunchesUsecase {
  constructor(
    private readonly launchesService: LaunchesService,
    private readonly spaceXApiService: SpaceXApiService,
  ) {}

  async handle() {
    try {
      const [spaceXLaunches, launches] = await Promise.all([
        this.spaceXApiService.getAllLaunches(),
        this.launchesService.getAllLaunches(),
      ]);

      const storedLaunchesIds = new Set(launches.map((r) => r.externalId));
      const launchesToStore = spaceXLaunches
        .filter((r) => !storedLaunchesIds.has(r.id))
        .map(SpaceXLaunchToDomainLaunchMapper);

      if (launchesToStore.length > 0) {
        await this.launchesService.createLaunches({ data: launchesToStore });
      }
    } catch (error) {}
  }
}
