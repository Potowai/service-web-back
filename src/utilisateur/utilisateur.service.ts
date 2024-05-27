import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Utilisateur } from './entities/utilisateur.entity';

@Injectable()
export class UtilisateurService {
  constructor(
    @InjectRepository(Utilisateur)
    private readonly utilisateurRepository: Repository<Utilisateur>,
  ) {}

  findAll(): Promise<Utilisateur[]> {
    return this.utilisateurRepository.find({ relations: ['parties'] });
  }

  findOne(id: number): Promise<Utilisateur> {
    return this.utilisateurRepository.findOne({ where: { id } });
  }

  create(utilisateur: Utilisateur): Promise<Utilisateur> {
    return this.utilisateurRepository.save(utilisateur);
  }

  async update(id: number, utilisateur: Utilisateur): Promise<void> {
    await this.utilisateurRepository.update(id, utilisateur);
  }

  async remove(id: number): Promise<void> {
    await this.utilisateurRepository.delete(id);
  }
}
