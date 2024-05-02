import { Module } from '@nestjs/common';
import { MusiqueService } from './musique.service';
import { MusiqueController } from './musique.controller';

@Module({
  controllers: [MusiqueController],
  providers: [MusiqueService],
})
export class MusiqueModule {}
