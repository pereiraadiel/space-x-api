import { LaunchEntity } from './../entities/launch.entity';
import { CreateLaunchesDTO } from '../dtos/createLaunches.dto';
import { GetLaunchesDTO } from '../dtos/getLaunches.dto';

export const LAUNCHES_REPOSITORY = 'LAUNCHES_REPOSITORY';

export interface LaunchesRepository {
  createMany(dto: CreateLaunchesDTO): Promise<number>;
  getMany(dto: GetLaunchesDTO): Promise<LaunchEntity[]>;
  getAll(): Promise<LaunchEntity[]>;
  count(dto: GetLaunchesDTO): Promise<number>;
}
