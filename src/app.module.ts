import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MusiqueModule } from './musique/musique.module';

@Module({
  imports: [MusiqueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
