import { Component, OnInit } from '@angular/core';
import { MoviePageService, IMovie } from '../movie-page.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private moviesPageSvc: MoviePageService) { }

  ngOnInit() {
  }

  get MovieResults(): IMovie[] {
    return this.moviesPageSvc.movieResults;
  }
}
