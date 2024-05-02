import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Musique {
  @PrimaryGeneratedColumn()
  id_musique: number;

  @Column()
  titre: string;

  @Column()
  artiste: string;

  @Column()
  style: string;

  @Column()
  url: string;
}
