import { Injectable } from '@angular/core';
import { TheorieService, ITheory } from '../theorie.service';
import { IMovie } from '../movie-page/movie-page.service';

@Injectable({
  providedIn: 'root'
})
export class TheoriePageService {
  writer: string;
  movie: IMovie;
  theories: ITheory[];
  selectedTheorie: ITheory;
  resultsPageOpen: boolean = true;
  creatorPageOpen: boolean = false;

  constructor(private theorieSvc: TheorieService) {
    this.resultsPageOpen = true;
    this.creatorPageOpen = false;
   }

  get ImdbId(): string {
    return this.movie.imdbID;
  }

  set Movie(value: IMovie) {
    this.movie = value;
    this.GetTheories(this.movie.imdbID);
  }

  get Writer(): string {
    return this.writer;
  }

  set Writer(value: string) {
    this.writer = value;
    this.GetTheories(this.movie.imdbID, this.writer);
  }

  GetTheories(imdbId: string, writer: string = '') {
    // Reset theories
    this.theories = [];
    // Get results from theorie service
    this.theorieSvc.GetTheories(imdbId, writer).subscribe((response) => {
      console.log(response);
      let theories = response;
      // Add results to theories
      for (let theorie of theories) {
        this.theories.push({
          imdbID: theorie.imdbID,
          title: theorie.title,
          description: theorie.description,
          writer: theorie.writer
        });
      }
    }, (error) => {
      this.theories = [];
    });
    
    // Error => theories stays empty
  }
}