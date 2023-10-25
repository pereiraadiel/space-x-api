import { SpaceXRocket } from '../../infra/interfaces/spaceXRocket.interface';
import { RocketEntity } from '../entities/rocket.entity';

export const SpaceXRocketToDomainRocketMapper = (
  spaceXRocket: SpaceXRocket,
) => {
  const rocketEntity = new RocketEntity({
    active: spaceXRocket.active,
    description: spaceXRocket.description,
    externalId: spaceXRocket.id,
    name: spaceXRocket.name,
    type: spaceXRocket.type,
  });

  return rocketEntity;
};
