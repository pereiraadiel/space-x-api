import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Query } from '@nestjs/common';

import { GetLaunchesStatsUsecase } from '../../app/usecases/launches/getLaunchesStats.usecase';
import { GetLaunchesWithPaginationUsecase } from '../../app/usecases/launches/getLaunchesWithPagination.usecase';
import { GetLaunchesQueryRequestDTO } from '../dtos/getLaunchesRequest.dto';
import { LaunchesResponseDTO } from '../dtos/launchesResponse.dto';

@ApiTags('launches')
@Controller('launches')
export class LaunchesController {
  constructor(
    private readonly getLaunchesWithPaginationUsecase: GetLaunchesWithPaginationUsecase,
    private readonly getLaunchesStatsUsecase: GetLaunchesStatsUsecase,
  ) {}

  @Get()
  @ApiOkResponse({
    status: 200,
    description:
      'Retorna um objeto contendo o array de resultados além dos atributos para páginação',
    type: LaunchesResponseDTO,
    isArray: false,
  })
  getLaunches(@Query() { limit, page, search }: GetLaunchesQueryRequestDTO) {
    return this.getLaunchesWithPaginationUsecase.handle({
      search,
      limit: Number(limit),
      page: Number(page),
    });
  }

  @Get('stats')
  getLaunchesStats() {
    return this.getLaunchesStatsUsecase.handle();
  }
}
