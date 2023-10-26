import { Injectable } from '@nestjs/common';
import { LaunchesService } from '../../../domain/services/launches.service';
import { LaunchesToLaunchesByYearMapper } from '../../../domain/mappers/launchesToLaunchesByYear.mapper';
import { BadRequestException } from '../../../domain/exceptions/badRequest.exception';

@Injectable()
export class GetLaunchesStatsUsecase {
  serviceName = 'Get Launches Stats Usecase';
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
    } catch (error) {
      throw new BadRequestException(
        [
          {
            message: 'Falha ao obter as estatisticas de lançamentos',
          },
        ],
        this.serviceName,
      );
    }
  }
}
