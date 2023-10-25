import { Module } from '@nestjs/common';
import { AppController } from './presentation/controllers/app.controller';
import { LaunchesModule } from './launches.module';

@Module({
  imports: [LaunchesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
