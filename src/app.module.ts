import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnWorkModule } from './en-work/en-work.module';

@Module({
  imports: [EnWorkModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
