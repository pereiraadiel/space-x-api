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
    const launches = await Promise.all(
      dto.data.map(async (item) => {
        try {
          return await this.database.launch.create({
            data: {
              dateUtc: item.dateUtc,
              externalId: item.externalId,
              flightNumber: item.flightNumber,
              logoUrl: item.logoUrl,
              name: item.name,
              youtubeId: item.youtubeId,
              success: item.success,
              rocket: {
                connect: {
                  id: item.rocketId,
                },
              },
            },
          });
        } catch (error) {
          return null;
        }
      }),
    );

    return launches.length;
  }

  async getMany(dto: GetLaunchesDTO): Promise<LaunchEntity[]> {
    const skip = (dto.page - 1) * dto.limit;
    const take = dto.limit;

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
      skip,
      take,
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

  async count(dto: GetLaunchesDTO): Promise<number> {
    return await this.database.launch.count({
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
    });
  }
}
