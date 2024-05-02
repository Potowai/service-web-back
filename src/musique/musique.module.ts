import { Module } from '@nestjs/common';
import { MusiqueService } from './musique.service';
import { MusiqueController } from './musique.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Musique } from './entities/musique.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Musique])],
  controllers: [MusiqueController],
  providers: [MusiqueService],
})
export class MusiqueModule {}
