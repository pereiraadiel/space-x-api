import { RocketEntity } from './../entities/rocket.entity';
import { CreateRocketsDTO } from '../dtos/createRockets.dto';

export const ROCKETS_REPOSITORY = 'ROCKETS_REPOSITORY';

export interface RocketsRepository {
  createMany(dto: CreateRocketsDTO): Promise<number>;
  getAll(): Promise<RocketEntity[]>;
  count(): Promise<number>;
}
