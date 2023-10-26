import { config } from 'dotenv';
config();

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { LaunchResponseDTO } from './presentation/dtos/launchResponse.dto';
import { RocketResponseDTO } from './presentation/dtos/rocketResponse.dto';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Space X')
    .setDescription('The Space X API description')
    .setVersion('1.0')
    .addTag('space-x')
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    extraModels: [LaunchResponseDTO, RocketResponseDTO],
  });
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
