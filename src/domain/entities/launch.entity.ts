import { Column, ManyToOne, Entity as ORMEntity } from 'typeorm';
import { Entity } from './entity';
import { RocketEntity } from './rocket.entity';

@ORMEntity('launches')
export class LaunchEntity extends Entity {
  @Column()
  youtubeId: string;

  @Column({ default: false })
  success: boolean;

  @Column()
  dateUtc: Date;

  @Column()
  name: string;

  @Column()
  flightNumber: number;

  @Column()
  externalId: string;

  @ManyToOne(() => RocketEntity, (entity) => entity.launches)
  rocket: RocketEntity;

  rocketId: string;

  constructor(
    entity: Omit<LaunchEntity, 'id' | 'createdAt' | 'updatedAt' | 'rocket'>,
    id?: string,
  ) {
    super(entity, id);
    Object.assign(this, entity);
  }
}
