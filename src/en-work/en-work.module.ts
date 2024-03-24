import { Module } from '@nestjs/common';
import { EnWorkController } from './en-work.controller';
import { EnWorkService } from './en-work.service';

@Module({
  controllers: [EnWorkController],
  providers: [EnWorkService]
})
export class EnWorkModule {}
