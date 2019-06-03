import { Component, OnInit } from '@angular/core';
import { MoviePageService } from '../movie-page.service';

@Component({
  selector: 'app-movie-query',
  templateUrl: './movie-query.component.html',
  styleUrls: ['./movie-query.component.css']
})
export class MovieQueryComponent implements OnInit {
  searchMode: string = 'title';

  constructor(private moviePageSvc: MoviePageService) { }

  ngOnInit() {
  }

  set SearchMode(value: string) {
    this.searchMode = value;
  }

  get SearchMode(): string {
    return this.searchMode;
  }

  set Title(value: string) {
    this.moviePageSvc.Title = value;
  }

  get Title(): string {
    return this.moviePageSvc.Title;
  }

  set ImdbId(value: string) {
    this.moviePageSvc.ImdbId = value;
  }

  get ImdbId(): string {
    return this.moviePageSvc.ImdbId;
  }
}