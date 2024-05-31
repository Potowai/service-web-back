// partie.entity.ts
/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Utilisateur } from '../../utilisateur/entities/utilisateur.entity';

@Entity('parties')
export class Partie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  points: number;

  @Column()
  date: Date;

  @Column({ length: 30 })
  style: string;

  @ManyToOne(() => Utilisateur, (utilisateur) => utilisateur.parties)
  utilisateur: Utilisateur;
}
