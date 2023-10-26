import { ApiProperty } from '@nestjs/swagger';
import {
  IsBooleanString,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

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
    required: false,
  })
  page?: number = 1;

  @IsOptional()
  @IsNumberString()
  @ApiProperty({
    description: 'tamanho máximo que cada página poderá ter',
    example: 5,
    default: 5,
    minimum: 1,
    required: false,
  })
  limit?: number = 5;

  @IsOptional()
  @IsBooleanString()
  @ApiProperty({
    description:
      'retornará somente os registros que a propriedade success corresponder ao valor passado',
    example: true,
    required: false,
  })
  success?: boolean;
}
