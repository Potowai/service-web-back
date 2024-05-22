// partie.entity.ts
/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Utilisateur } from '../../utilisateur/entities/utilisateur.entity';

@Entity()
export class Partie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    points: string;

    @ManyToOne(() => Utilisateur, utilisateur => utilisateur.parties)
    utilisateur: Utilisateur;
}
