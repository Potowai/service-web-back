/* eslint-disable prettier/prettier */
// musique.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Source } from '../../source/entities/source.entity';

@Entity()
export class Musique {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    titre: string;

    @Column({ length: 50 })
    auteur: string;

    @Column({ length: 50 })
    style: string;

    @Column({ length: 100 })
    url: string;

    @ManyToOne(() => Source, source => source.musiques)
    source: Source;
}
