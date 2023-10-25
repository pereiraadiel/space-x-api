import { GetLaunchesStatsUsecase } from '../../app/usecases/launches/getLaunchesStats.usecase';
import { Controller, Get, Query } from '@nestjs/common';

import { GetLaunchesWithPaginationUsecase } from '../../app/usecases/launches/getLaunchesWithPagination.usecase';
import { ApiQuery } from '@nestjs/swagger';

@Controller('/launches')
export class LaunchesController {
  constructor(
    private readonly getLaunchesWithPaginationUsecase: GetLaunchesWithPaginationUsecase,
    private readonly getLaunchesStatsUsecase: GetLaunchesStatsUsecase,
  ) {}

  @Get()
  @ApiQuery({
    name: 'Lançamentos',
    description: 'Retorna os lançamentos de foguetes paginado',
  })
  getLaunches(@Query() params) {
    return this.getLaunchesWithPaginationUsecase.handle(params);
  }

  @Get('/stats')
  getLaunchesStats() {
    return this.getLaunchesStatsUsecase.handle();
  }
}
