import { Injectable } from '@nestjs/common';
import { LaunchesService } from '../../../domain/services/launches.service';
import { GetLaunchesDTO } from '../../../domain/dtos/getLaunches.dto';

@Injectable()
export class GetLaunchesWithPaginationUsecase {
  constructor(private readonly launchesService: LaunchesService) {}

  async handle(dto: GetLaunchesDTO) {
    try {
      const [launches, totalDocs] = await Promise.all([
        this.launchesService.getLaunches(dto),
        this.launchesService.countAllLaunches(),
      ]);

      const results = launches.launches;
      const totalPages = Math.ceil(totalDocs / dto.limit);
      const page = dto.page;
      const hasNext = page < totalPages;
      const hasPrev = page > 1;

      return {
        results,
        totalDocs,
        totalPages,
        page,
        hasNext,
        hasPrev,
      };
    } catch (error) {}
  }
}
