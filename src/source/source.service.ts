import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Source } from './entities/source.entity';

@Injectable()
export class SourceService {
  constructor(
    @InjectRepository(Source)
    private readonly sourceRepository: Repository<Source>,
  ) {}

  findAll(): Promise<Source[]> {
    return this.sourceRepository.find();
  }

  findOne(id: number): Promise<Source> {
    return this.sourceRepository.findOne({
      where: { id },
    });
  }

  create(source: Source): Promise<Source> {
    return this.sourceRepository.save(source);
  }

  async update(id: number, source: Source): Promise<void> {
    await this.sourceRepository.update(id, source);
  }

  async remove(id: number): Promise<void> {
    await this.sourceRepository.delete(id);
  }
}
