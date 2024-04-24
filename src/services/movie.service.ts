import { Inject, Injectable } from '@nestjs/common';
import { Movie } from 'src/entity/Movie';
import { FindOneOptions, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PageOptionsDto } from 'src/dto/page.options.dto';
import { PageDto } from 'src/dto/page.dto';
import { PageMetaDto } from 'src/dto/page.meta.dto';
import { MovieDto } from 'src/dto/movie.dto';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
    @Inject(CACHE_MANAGER) private cacheService: Cache,
  ) {}

  async findAll(pageOptionsDto: PageOptionsDto): Promise<PageDto<MovieDto>> {
    const queryBuilder = this.movieRepository.createQueryBuilder('movie');
    queryBuilder
      .orderBy('movie.createdAt', 'DESC')
      .skip(pageOptionsDto.skip)
      .take(pageOptionsDto.perPage);

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    const pageMetaDto = new PageMetaDto({
      itemCount,
      pageOptionsDto,
    });

    await this.cacheService.set('movies', entities);
    const cachedDate = await this.cacheService.get('movies');
    console.log(cachedDate);

    return new PageDto(entities, pageMetaDto);
  }

  async findOne(id: number): Promise<Movie | null> {
    const options: FindOneOptions<Movie> = { where: { id } };
    return this.movieRepository.findOne(options);
  }

  async createMovie(movie: Movie): Promise<Movie> {
    return this.movieRepository.save(movie);
  }

  async updateMovie(id: number, movie: Movie): Promise<Movie> {
    await this.movieRepository.update(id, movie);
    return this.findOne(id);
  }

  async deleteMovie(id: number): Promise<void> {
    await this.movieRepository.delete(id);
  }
}
