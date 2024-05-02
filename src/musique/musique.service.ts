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

  async create(body: Musique): Promise<Musique> {
    const musique = this.musiqueRepository.create(body);
    return await this.musiqueRepository.save(musique);
  }

  async findAll(): Promise<Musique[]> {
    return await this.musiqueRepository.find();
  }

  async findOne(id_musique: number): Promise<Musique> {
    const musique = await this.musiqueRepository.findOne({
      where: { id_musique },
    });
    return musique;
  }

  async update(id_musique: number, body: Musique): Promise<Musique | null> {
    const musique = await this.musiqueRepository.findOne({
      where: { id_musique },
    });
    this.musiqueRepository.merge(musique, body);
    return await this.musiqueRepository.save(musique);
  }

  async remove(id: number): Promise<void> {
    await this.musiqueRepository.delete(id);
  }
}
