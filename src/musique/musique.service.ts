import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Musique } from './entities/musique.entity';

@Injectable()
export class MusiqueService {
  constructor(
    @InjectRepository(Musique)
    private musiqueRepository: Repository<Musique>,
  ) {}

  async create(musiques: Musique[]): Promise<Musique[]> {
    return await this.musiqueRepository.save(musiques);
  }

  async findAll(): Promise<Musique[]> {
    return await this.musiqueRepository.find();
  }

  async findOne(id: number): Promise<Musique> {
    const musique = await this.musiqueRepository.findOne({
      where: { id },
    });
    return musique;
  }

  async update(id: number, body: Musique): Promise<Musique | null> {
    const musique = await this.musiqueRepository.findOne({
      where: { id },
    });
    this.musiqueRepository.merge(musique, body);
    return await this.musiqueRepository.save(musique);
  }

  async remove(id: number): Promise<void> {
    await this.musiqueRepository.delete(id);
  }

  async findByStyle(style: string): Promise<Musique[]> {
    const musique = await this.musiqueRepository.findBy({ style });
    return musique;
  }
}
