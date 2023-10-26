import { Entity } from './entity';
import { RocketEntity } from './rocket.entity';

export class LaunchEntity extends Entity {
  youtubeId: string;
  success: boolean;
  dateUtc: Date;
  name: string;
  flightNumber: number;
  externalId: string;
  rocketId: string;
  rocket: RocketEntity;

  constructor(
    entity: Omit<LaunchEntity, 'id' | 'createdAt' | 'updatedAt' | 'rocket'>,
    id?: string,
  ) {
    super(entity, id);
    Object.assign(this, entity);
  }
}
