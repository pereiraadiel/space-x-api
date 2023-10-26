import { Inject, Injectable } from '@nestjs/common';
import {
  LaunchesRepository,
  LAUNCHES_REPOSITORY,
} from '../repositories/launches.repository';
import { CreateLaunchesDTO } from '../dtos/createLaunches.dto';
import { GetLaunchesDTO } from '../dtos/getLaunches.dto';

@Injectable()
export class LaunchesService {
  constructor(
    @Inject(LAUNCHES_REPOSITORY)
    private readonly launchesRepository: LaunchesRepository,
  ) {}

  async createLaunches(dto: CreateLaunchesDTO) {
    console.warn('criou launches', dto.data[0]);
    try {
      return await this.launchesRepository.createMany(dto);
    } catch (error) {
      console.warn(error.message);
    }
  }

  async countLaunches(dto: GetLaunchesDTO) {
    return await this.launchesRepository.count(dto);
  }

  async getAllLaunches() {
    return await this.launchesRepository.getAll();
  }

  async getLaunches(dto: GetLaunchesDTO) {
    const launches = await this.launchesRepository.getMany(dto);
    return launches;
  }
}
