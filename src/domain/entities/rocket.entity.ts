import { Entity } from './entity';
import { LaunchEntity } from './launch.entity';

export class RocketEntity extends Entity {
  active: boolean;
  description: string;
  externalId: string;
  name: string;
  type: string;
  launches: LaunchEntity[];

  constructor(
    entity: Omit<RocketEntity, 'id' | 'createdAt' | 'updatedAt' | 'launches'>,
    id?: string,
  ) {
    super(entity, id);
    Object.assign(this, entity);

    if (!this.launches) this.launches = [];
  }
}
