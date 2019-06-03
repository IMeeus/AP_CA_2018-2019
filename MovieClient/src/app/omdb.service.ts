import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  apikey = "6f2df26f";

  constructor(private http: HttpClient) { }

  GetMovies(title: string, page: number){
    return this.http.get<IMoviesResponse>(`http://www.omdbapi.com/?apikey=${this.apikey}&type=movie&s=${title}&page=${page}`);
  }

  GetMovieById(id: string) {
    return this.http.get<IMovieByIdResponse>(`http://www.omdbapi.com/?apikey=${this.apikey}&i=${id}`);
  }
}

export interface IMovieResponse {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface IMoviesResponse {
  Search: IMovieResponse[];
  totalResults: string;
  Response: string;
}

export interface IRating {
  Source: string;
  Value: string;
}

export interface IMovieByIdResponse {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: IRating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}