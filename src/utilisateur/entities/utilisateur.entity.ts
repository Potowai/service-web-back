// utilisateur.entity.ts
/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Partie } from '../../partie/entities/partie.entity';

@Entity()
export class Utilisateur {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    pseudo: string;

    @OneToMany(() => Partie, partie => partie.utilisateur)
    parties: Partie[];
}
