import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Partie } from './entities/partie.entity';

@Injectable()
export class PartieService {
  constructor(
    @InjectRepository(Partie)
    private readonly partieRepository: Repository<Partie>,
  ) {}

  findAll(): Promise<Partie[]> {
    return this.partieRepository.find({ relations: ['utilisateur'] });
  }

  findOne(id: number): Promise<Partie> {
    return this.partieRepository.findOne({
      where: { id },
      relations: ['utilisateur'],
    });
  }

  create(partie: Partie[]): Promise<Partie[]> {
    return this.partieRepository.save(partie);
  }

  async update(id: number, partie: Partie): Promise<void> {
    await this.partieRepository.update(id, partie);
  }

  async remove(id: number): Promise<void> {
    await this.partieRepository.delete(id);
  }
}
