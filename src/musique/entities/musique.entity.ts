/* eslint-disable prettier/prettier */
// musique.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Musique {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  titre: string;

  @Column({ length: 100 })
  auteur: string;

  @Column({ length: 50 })
  style: string;

  @Column({ length: 100 })
  url: string;
}
