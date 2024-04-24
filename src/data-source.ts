import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';
import { Movie } from './entity/Movie';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'root',
  password: 'admin',
  database: 'movie-db',
  synchronize: true,
  entities: [User, Movie],
  migrations: [],
  subscribers: [],
});
