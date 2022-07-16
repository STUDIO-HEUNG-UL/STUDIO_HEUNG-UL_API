import { Module } from '@nestjs/common';
import { SilokController } from './silok.controller';
import { SilokService } from './silok.service';

@Module({
  controllers: [SilokController],
  providers: [SilokService],
})
export class SilokModule {}
