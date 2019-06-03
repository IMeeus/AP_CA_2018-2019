import { Injectable } from '@angular/core';
import { OmdbService } from '../omdb.service';

@Injectable({
  providedIn: 'root'
})
export class MoviePageService {
  title: string;
  imdbId: string;
  page: number;
  nrOfPages: number;
  movieResults: IMovie[];

  constructor(private omdbSvc: OmdbService) {
    this.title = '';
    this.imdbId = '';
    this.page = 1;
    this.nrOfPages = 1;
    this.movieResults = [];
  }

  set Title(value: string) {
    this.title = value;
    this.imdbId = '';
    this.page = 1;
    this.nrOfPages = 1;
    this.GetMovies(this.title);
  }

  set ImdbId(value: string) {
    this.title = '';
    this.imdbId = value;
    this.page = 1;
    this.nrOfPages = 1;
    this.GetMovieById(this.imdbId);
  }

  NextPage() {
    if (this.page < this.nrOfPages) {
      this.page += 1;
      this.GetMovies(this.title, this.page);
    }
  }

  PrevPage() {
    if (this.page > 1) {
      this.page -= 1;
      this.GetMovies(this.title, this.page);
    }
  }

  GetMovies(title: string, page: number = 1) {
    // Reset Movie Results
    this.movieResults = [];

    // Get Movies from omdbService
    this.omdbSvc.GetMovies(title, page).subscribe(
      (response) => {
        // Movies found => Add results to movieResults.
        if (response.Response == "True") {
          let results = response.Search;

          for (let movie of results) {
            let newMovie: IMovie = {
              imdbID: movie.imdbID,
              title: movie.Title,
              poster: movie.Poster
            }

            // Alt poster if poster N/A.
            if (newMovie.poster == 'N/A')
              newMovie.poster = 'assets/moviePosterUnavailable.jpg';

            this.movieResults.push(newMovie);
          }

          this.nrOfPages = Math.ceil(parseInt(response.totalResults) / 10)
        }
        // Error => movieResults stays empty.
      });
  }


  GetMovieById(id: string) {
    // Reset Movie Results
    this.movieResults = [];

    // Get Movie from omdbService
    this.omdbSvc.GetMovieById(id).subscribe(
      (response) => {
        // Movie found => Add result to movieResults.
        if (response.Response == "True") {
          let newMovie: IMovie = {
            imdbID: response.imdbID,
            title: response.Title,
            poster: response.Poster
          }
          // Alt poster if poster N/A.
          if (newMovie.poster == 'N/A')
            newMovie.poster = 'assets/moviePosterUnavailable.jpg';
          
          this.movieResults[0] = newMovie;
        }
        // Error => movieResults stays empty.
      });
  }
}

export interface IMovie {
  imdbID: string;
  title: string;
  poster: string;
}