import { Injectable } from '@nestjs/common';
import { SpaceXRocketToDomainRocketMapper } from './../../../domain/mappers/spaceXRocketToDomainRocket.mapper';
import { RocketsService } from '../../../domain/services/rockets.service';
import { SpaceXApiService } from '../../../infra/services/spaceXApi.service';

@Injectable()
export class PopulateRocketsUsecase {
  constructor(
    private readonly rocketsService: RocketsService,
    private readonly spaceXApiService: SpaceXApiService,
  ) {}

  async handle() {
    try {
      const [spaceXRockets, rockets] = await Promise.all([
        this.spaceXApiService.getAllRockets(),
        this.rocketsService.getAllRockets(),
      ]);

      const storedRocketsIds = new Set(rockets.map((r) => r.externalId));
      const rocketsToStore = spaceXRockets
        .filter((r) => !storedRocketsIds.has(r.id))
        .map(SpaceXRocketToDomainRocketMapper);

      if (rocketsToStore.length > 0) {
        await this.rocketsService.createRockets({ data: rocketsToStore });
      }
    } catch (error) {
      console.error(error);
    }
  }
}
