import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AbstractEntity } from './AbstractEntity';

@Entity()
export class Movie extends AbstractEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  year: number;

  @Column()
  rating: number;

  @Column()
  genre: string;

  @Column()
  director: string;
}
