import { Repository } from 'typeorm';
import { EntityRepository } from 'nestjs-typeorm-custom-repository';
import { RocketEntity } from '../entities/rocket.entity';

@EntityRepository(RocketEntity)
export class RocketsRepository extends Repository<RocketEntity> {}
