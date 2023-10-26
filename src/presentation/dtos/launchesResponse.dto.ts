import { ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { LaunchResponseDTO } from './launchResponse.dto';

export class LaunchesResponseDTO {
  @ApiProperty({
    type: 'array',
    items: {
      oneOf: [
        {
          $ref: getSchemaPath(LaunchResponseDTO),
        },
      ],
    },
  })
  results: LaunchResponseDTO[];

  @ApiProperty()
  totalDocs: number;

  @ApiProperty()
  totalPages: number;

  @ApiProperty()
  page: number;

  @ApiProperty()
  hasNext: boolean;

  @ApiProperty()
  hasPrev: boolean;
}
