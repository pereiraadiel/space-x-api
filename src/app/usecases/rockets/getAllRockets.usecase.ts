import { Injectable } from '@nestjs/common';
import { RocketsService } from '../../../domain/services/rockets.service';
import { BadRequestException } from '../../../domain/exceptions/badRequest.exception';

@Injectable()
export class GetAllRocketsUseCase {
  serviceName = 'Get All Rockets Usecase';
  constructor(private readonly rocketsService: RocketsService) {}

  async handle() {
    try {
      const rockets = await this.rocketsService.getAllRockets();
      return rockets;
    } catch (error) {
      throw new BadRequestException(
        [
          {
            message: 'Falha ao buscar os foguetes',
          },
        ],
        this.serviceName,
      );
    }
  }
}
