import { config } from 'dotenv';
config();

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { LaunchResponseDTO } from './presentation/dtos/launchResponse.dto';
import { RocketResponseDTO } from './presentation/dtos/rocketResponse.dto';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { CronService } from './infra/services/cron.service';
import { ExceptionHandler } from './presentation/handlers/exception.handler';
import { EnvironmentConfig } from './config/environment.config';
import { ValidationExceptionHandler } from './presentation/handlers/validationException.handler';
import { LaunchesByYearResponseDTO } from './presentation/dtos/launchesByYearResponse.dto';

const documentation = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Space X')
    .setDescription('The Space X API description')
    .setVersion('1.0')
    .addTag('space-x')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    extraModels: [
      LaunchResponseDTO,
      RocketResponseDTO,
      LaunchesByYearResponseDTO,
    ],
  });
  SwaggerModule.setup('api', app, document);
};

const taskSchedule = (app: INestApplication) => {
  const scheduledTaskCron = app.get(CronService);
  scheduledTaskCron.schedule();
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(
    new ExceptionHandler(),
    new ValidationExceptionHandler(),
  );
  app.enableCors();

  documentation(app);
  taskSchedule(app);
  await app.listen(EnvironmentConfig.app.port, async () => {
    console.warn(`🚀 server running at ${await app.getUrl()}`);
  });
}
bootstrap();
