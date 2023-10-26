import { Module } from '@nestjs/common';
import { AppController } from './presentation/controllers/app.controller';
import { LaunchesModule } from './launches.module';
import { DatabaseModule } from './database.module';
import { CronModule } from './cron.module';

@Module({
  imports: [CronModule, LaunchesModule, DatabaseModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
