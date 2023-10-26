import * as crypto from 'crypto';

export class Entity {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(
    entity: Omit<Entity, 'createdAt' | 'id' | 'updatedAt'>,
    id?: string,
  ) {
    Object.assign(this, entity);
    if (id) this.id = id;

    if (!this.id) this.id = crypto.randomUUID();
  }
}
