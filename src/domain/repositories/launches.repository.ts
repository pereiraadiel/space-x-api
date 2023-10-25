import { Repository } from 'typeorm';
import { EntityRepository } from 'nestjs-typeorm-custom-repository';
import { LaunchEntity } from '../entities/launch.entity';

@EntityRepository(LaunchEntity)
export class LaunchesRepository extends Repository<LaunchEntity> {}
