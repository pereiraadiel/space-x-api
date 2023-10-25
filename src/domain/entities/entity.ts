import { CreateDateColumn, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import crypto from 'crypto';

export class Entity {
  @PrimaryColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
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
