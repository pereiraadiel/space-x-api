import { Entity } from './entity';
import { RocketEntity } from './rocket.entity';

export class LaunchEntity extends Entity {
  name: string;
  logoUrl: string;
  success: boolean;
  youtubeId: string;
  dateUtc: Date;
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
