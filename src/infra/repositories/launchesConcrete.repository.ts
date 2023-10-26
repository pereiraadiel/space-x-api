import { Injectable } from '@nestjs/common';
import { LaunchesRepository } from '../../domain/repositories/launches.repository';
import { CreateLaunchesDTO } from '../../domain/dtos/createLaunches.dto';
import { GetLaunchesDTO } from '../../domain/dtos/getLaunches.dto';
import { LaunchEntity } from '../../domain/entities/launch.entity';
import { PrismaService } from '../services/prisma.service';

@Injectable()
export class LaunchesConcreteRepository implements LaunchesRepository {
  constructor(private readonly database: PrismaService) {}

  async createMany(dto: CreateLaunchesDTO): Promise<number> {
    const launches = await this.database.launch.createMany({
      data: dto.data,
    });

    return launches.count;
  }

  async getMany(dto: GetLaunchesDTO): Promise<LaunchEntity[]> {
    const launches = await this.database.launch.findMany({
      where: {
        AND: {
          success: dto.success !== undefined ? dto.success : undefined,
          OR: [
            {
              name: {
                contains: dto.search,
              },
            },
            {
              rocket: {
                name: {
                  contains: dto.search,
                },
              },
            },
          ],
        },
      },
      include: {
        rocket: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return launches as unknown as LaunchEntity[];
  }

  async getAll(): Promise<LaunchEntity[]> {
    const launches = await this.database.launch.findMany({
      include: {
        rocket: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return launches as unknown as LaunchEntity[];
  }

  async count(): Promise<number> {
    return await this.database.launch.count();
  }
}
