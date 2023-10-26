import { ApiProperty } from '@nestjs/swagger';
import { RocketResponseDTO } from './rocketResponse.dto';

export class LaunchResponseDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  success: boolean;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  youtubeId: string;

  @ApiProperty()
  flightNumber: number;

  @ApiProperty()
  rocket: RocketResponseDTO;
}
