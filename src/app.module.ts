import { Module } from '@nestjs/common';
import { AppController } from './presentation/controllers/app.controller';
import { LaunchesModule } from './launches.module';
import { DatabaseModule } from './database.module';

@Module({
  imports: [LaunchesModule, DatabaseModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
