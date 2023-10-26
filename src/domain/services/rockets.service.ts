import { Inject, Injectable } from '@nestjs/common';
import {
  ROCKETS_REPOSITORY,
  RocketsRepository,
} from '../repositories/rockets.repository';
import { CreateRocketsDTO } from '../dtos/createRockets.dto';

@Injectable()
export class RocketsService {
  constructor(
    @Inject(ROCKETS_REPOSITORY)
    private readonly rocketsRepository: RocketsRepository,
  ) {}

  async createRockets(dto: CreateRocketsDTO) {
    console.warn('criou rockets');
    try {
      return await this.rocketsRepository.createMany(dto);
    } catch (error) {
      console.warn(error.message);
    }
  }

  async countAllRockets() {
    return await this.rocketsRepository.count();
  }

  async getAllRockets() {
    return await this.rocketsRepository.getAll();
  }
}
