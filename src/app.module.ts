import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SilokModule } from './silok/silok.module';

@Module({
  imports: [SilokModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
