import { Global, Module } from '@nestjs/common';
import { PrismaService } from './infra/services/prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class DatabaseModule {}
