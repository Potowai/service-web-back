import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartieService } from './partie.service';
import { PartieController } from './partie.controller';
import { Partie } from './entities/partie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Partie])],
  providers: [PartieService],
  controllers: [PartieController],
})
export class PartieModule {}
