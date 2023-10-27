import { Module } from '@nestjs/common';
import { RocketsController } from './presentation/controllers/rockets.controller';
import { RocketsService } from './domain/services/rockets.service';
import { GetAllRocketsUseCase } from './app/usecases/rockets/getAllRockets.usecase';
import { ROCKETS_REPOSITORY } from './domain/repositories/rockets.repository';
import { RocketsConcreteRepository } from './infra/repositories/rocketsConcrete.repository';

@Module({
  controllers: [RocketsController],
  providers: [
    RocketsService,
    GetAllRocketsUseCase,
    {
      provide: ROCKETS_REPOSITORY,
      useClass: RocketsConcreteRepository,
    },
  ],
})
export class RocketsModule {}
