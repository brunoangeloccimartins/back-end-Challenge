import { Movie } from '../entity/Movie';
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { MovieService } from '../services/movie.service';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { PageOptionsDto } from 'src/dto/page.options.dto';
import { PageDto } from 'src/dto/page.dto';
import { MovieDto } from 'src/dto/movie.dto';
import { ApiTags } from '@nestjs/swagger';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';

@Controller('movies')
@ApiTags('movies')
@UseGuards(JwtAuthGuard)
@UseInterceptors(ClassSerializerInterceptor)
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @UseInterceptors(CacheInterceptor)
  @CacheTTL(30)
  @Get()
  getAllMovies(
    @Query() pageOptionsDto: PageOptionsDto,
  ): Promise<PageDto<MovieDto>> {
    return this.movieService.findAll(pageOptionsDto);
  }

  @Get(':id')
  getMovie(id: number): Promise<Movie | null> {
    return this.movieService.findOne(id);
  }

  @Post()
  createMovie(@Body() movie: Movie): Promise<Movie> {
    return this.movieService.createMovie(movie);
  }

  @Put(':id')
  updateMovie(@Param('id') id: number, @Body() movie: Movie): Promise<Movie> {
    return this.movieService.updateMovie(id, movie);
  }

  @Delete(':id')
  deleteMovie(@Param('id') id: number): Promise<void> {
    return this.movieService.deleteMovie(id);
  }
}
