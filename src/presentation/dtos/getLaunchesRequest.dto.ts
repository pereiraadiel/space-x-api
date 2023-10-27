import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, IsOptional, IsString } from 'class-validator';

export class GetLaunchesQueryRequestDTO {
  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'termo de busca',
    example: 'Falcon',
    required: false,
  })
  search?: string;

  @IsOptional()
  @IsNumberString()
  @ApiProperty({
    description: 'página a ser retornada',
    example: 1,
    default: 1,
    minimum: 1,
    required: true,
  })
  page?: number = 1;

  @IsOptional()
  @IsNumberString()
  @ApiProperty({
    description: 'tamanho máximo que cada página poderá ter',
    example: 5,
    default: 5,
    minimum: 1,
    required: true,
  })
  limit?: number = 5;
}
