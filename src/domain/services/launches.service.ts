import { Injectable } from '@nestjs/common';
import { LaunchesRepository } from '../repositories/launches.repository';
import { CreateLaunchesDTO } from '../dtos/createLaunches.dto';
import { GetLaunchesDTO } from '../dtos/getLaunches.dto';

@Injectable()
export class LaunchesService {
  constructor(private readonly launchesRepository: LaunchesRepository) {}

  async createLaunches(dto: CreateLaunchesDTO) {
    return await this.launchesRepository.save(dto.data);
  }

  async countAllLaunches() {
    return await this.launchesRepository.count();
  }

  async getAllLaunches() {
    return await this.launchesRepository.find({
      relations: {
        rocket: true,
      },
    });
  }

  async getLaunches(dto: GetLaunchesDTO) {
    const skip = (dto.page - 1) * dto.limit;

    const [launches, total] = await this.launchesRepository
      .createQueryBuilder('launch')
      .innerJoin('launch.rocket', 'rocket')
      .where('launch.name LIKE :search', { search: `%${dto.search}%` })
      .orWhere('rocket.name LIKE :search', {
        search: `%${dto.search}%`,
      })
      .orWhere('launch.description LIKE :search', {
        search: `%${dto.search}%`,
      })
      .skip(skip)
      .take(dto.limit)
      .getManyAndCount();

    return {
      launches,
      pageTotal: total,
    };
  }
}
