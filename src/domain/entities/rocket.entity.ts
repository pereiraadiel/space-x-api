import { Column, OneToMany, Entity as ORMEntity } from 'typeorm';
import { Entity } from './entity';
import { LaunchEntity } from './launch.entity';

@ORMEntity('rockets')
export class RocketEntity extends Entity {
  @Column({ default: false })
  active: boolean;

  @Column()
  description: string;

  @Column()
  externalId: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @OneToMany(() => LaunchEntity, (entity) => entity.rocket)
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
