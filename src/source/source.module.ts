import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SourceService } from './source.service';
import { SourceController } from './source.controller';
import { Source } from './entities/source.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Source])],
  providers: [SourceService],
  controllers: [SourceController],
})
export class SourceModule {}
