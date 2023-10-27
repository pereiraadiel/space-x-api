import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GetAllRocketsUseCase } from '../../app/usecases/rockets/getAllRockets.usecase';
import { RocketResponseDTO } from '../dtos/rocketResponse.dto';

@ApiTags('rockets')
@Controller('rockets')
export class RocketsController {
  constructor(private readonly getAllRocketsUseCase: GetAllRocketsUseCase) {}

  @Get()
  @ApiOkResponse({
    status: 200,
    description: 'Retorna um array de foguetes',
    type: RocketResponseDTO,
    isArray: true,
  })
  getAllRockets() {
    return this.getAllRocketsUseCase.handle();
  }
}
