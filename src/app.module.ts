import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/User';
import { Movie } from './entity/Movie';
import { MovieModule } from './modules/movie.module';
import { UserModule } from './modules/user.module';
import { AuthModule } from './auth/auth.module';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: 'redis',
      port: '6379',
      username: 'root',
      password: 'admin',
      no_ready_check: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'root',
      password: 'admin',
      database: 'movie-db',
      synchronize: true,
      logging: true,
      entities: [User, Movie],
      migrations: [],
      subscribers: [],
    }),
    MovieModule,
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
