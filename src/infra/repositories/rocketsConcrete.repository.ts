import { Injectable } from '@nestjs/common';
import { CreateRocketsDTO } from '../../domain/dtos/createRockets.dto';
import { RocketEntity } from '../../domain/entities/rocket.entity';
import { RocketsRepository } from '../../domain/repositories/rockets.repository';
import { PrismaService } from '../services/prisma.service';

@Injectable()
export class RocketsConcreteRepository implements RocketsRepository {
  constructor(private readonly database: PrismaService) {}

  async createMany(dto: CreateRocketsDTO): Promise<number> {
    const rockets = await this.database.rocket.createMany({
      data: dto.data,
    });

    return rockets.count;
  }

  async getAll(): Promise<RocketEntity[]> {
    const rockets = await this.database.rocket.findMany();

    return rockets as unknown as RocketEntity[];
  }

  async count(): Promise<number> {
    return await this.database.rocket.count();
  }
}
