import { ApiProperty } from '@nestjs/swagger';

export class RocketResponseDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;
}
