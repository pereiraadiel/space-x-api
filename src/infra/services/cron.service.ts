import { PopulateLaunchesUsecase } from './../../app/usecases/launches/populateLaunches.usecase';
import { Injectable } from '@nestjs/common';
import * as cron from 'node-cron';
import { PopulateRocketsUsecase } from '../../app/usecases/rockets/populateRockets.usecase';

@Injectable()
export class CronService {
  constructor(
    private readonly populateRockets: PopulateRocketsUsecase,
    private readonly populateLaunches: PopulateLaunchesUsecase,
  ) {}

  schedule() {
    // executar todos os dias às 9h
    cron.schedule('0 9 * * *', () => {
      this.populateRockets.handle().then(() => this.populateLaunches.handle());
    });
  }
}
