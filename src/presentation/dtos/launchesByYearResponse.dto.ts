import { ApiProperty } from '@nestjs/swagger';

class LaunchByYear {
  @ApiProperty()
  name: string;

  @ApiProperty()
  rocket: string;

  @ApiProperty()
  success: boolean;
}

class LaunchesByYear {
  @ApiProperty({
    description: 'O ano do lançamento.',
  })
  year: string;
  @ApiProperty({
    type: [LaunchByYear],
  })
  launches: LaunchByYear[];
}

export class LaunchesByYearResponseDTO {
  @ApiProperty({
    type: [LaunchesByYear],
  })
  launchesByYear: LaunchesByYear[];
}
