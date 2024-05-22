// source.entity.ts
/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Musique } from './musique.entity';

@Entity()
export class Source {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 150 })
    widgetUrl: string;

    @Column({ length: 50 })
    plateforme: string;

    @OneToMany(() => Musique, musique => musique.source)
    musiques: Musique[];
}
