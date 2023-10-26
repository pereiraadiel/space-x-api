import { Injectable } from '@nestjs/common';
import { LaunchesService } from '../../../domain/services/launches.service';
import { GetLaunchesDTO } from '../../../domain/dtos/getLaunches.dto';
import { BadRequestException } from '../../../domain/exceptions/badRequest.exception';

@Injectable()
export class GetLaunchesWithPaginationUsecase {
  serviceName = 'Get Launches With Pagination Usecase';
  constructor(private readonly launchesService: LaunchesService) {}

  async handle(dto: GetLaunchesDTO) {
    try {
      const [results, totalDocs] = await Promise.all([
        this.launchesService.getLaunches(dto),
        this.launchesService.countLaunches(dto),
      ]);

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
    } catch (error) {
      throw new BadRequestException(
        [
          {
            message:
              'Falha ao obter os lançamentos para a página solicitada! verifique se os dados passados estão corretos',
          },
        ],
        this.serviceName,
      );
    }
  }
}
