import { SpaceXLaunch } from '../../infra/interfaces/spaceXLaunch.interface';
import { LaunchEntity } from '../entities/launch.entity';

export const SpaceXLaunchToDomainLaunchMapper = (
  spaceXLaunch: SpaceXLaunch,
) => {
  const launchEntity = new LaunchEntity({
    externalId: spaceXLaunch.id,
    name: spaceXLaunch.name,
    logoUrl:
      spaceXLaunch.links.patch.small !== null
        ? spaceXLaunch.links.patch.small
        : '',
    dateUtc: spaceXLaunch.date_utc,
    flightNumber: spaceXLaunch.flight_number,
    success: spaceXLaunch.success !== null ? spaceXLaunch.success : false,
    youtubeId:
      spaceXLaunch.links.youtube_id !== null
        ? spaceXLaunch.links.youtube_id
        : '',
    rocketId: spaceXLaunch.rocket,
  });

  return launchEntity;
};
