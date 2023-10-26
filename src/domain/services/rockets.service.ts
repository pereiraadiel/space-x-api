import { Injectable } from '@nestjs/common';
import { RocketsRepository } from '../repositories/rockets.repository';
import { CreateRocketsDTO } from '../dtos/createRockets.dto';

@Injectable()
export class RocketsService {
  constructor(private readonly rocketsRepository: RocketsRepository) {}

  async createRockets(dto: CreateRocketsDTO) {
    return await this.rocketsRepository.createMany(dto);
  }

  async countAllRockets() {
    return await this.rocketsRepository.count();
  }

  async getAllRockets() {
    return await this.rocketsRepository.getAll();
  }
}
