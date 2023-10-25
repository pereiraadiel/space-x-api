import { LaunchesByYear } from '../../infra/interfaces/launchesByYear.interface';
import { LaunchEntity } from '../entities/launch.entity';

export const LaunchesToLaunchesByYearMapper = (launches: LaunchEntity[]) => {
  return launches.reduce((acc: LaunchesByYear[], current) => {
    const year = new Date(current.dateUtc).getFullYear().toString();
    const group = acc.find((item) => item.year === year);

    const launch = {
      name: current.name,
      rocket: current.rocket.name,
      success: current.success,
    };

    if (group) {
      if (!group.launches.includes(launch)) {
        group.launches.push(launch);
      }
    } else {
      acc.push({
        year,
        launches: [launch],
      });
    }

    return acc;
  }, []);
};
