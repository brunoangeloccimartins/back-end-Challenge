import { Movie } from 'src/entity/Movie';

export class MovieDto {
  title: string;
  year: number;
  rating: number;
  genre: string;
  director: string;

  constructor(movie: Movie) {
    this.title = movie.title;
    this.year = movie.year;
    this.rating = movie.rating;
    this.genre = movie.genre;
    this.director = movie.director;
  }
}
