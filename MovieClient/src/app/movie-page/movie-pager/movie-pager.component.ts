import { Component, OnInit } from '@angular/core';
import { MoviePageService } from '../movie-page.service';

@Component({
  selector: 'app-movie-pager',
  templateUrl: './movie-pager.component.html',
  styleUrls: ['./movie-pager.component.css']
})
export class MoviePagerComponent implements OnInit {

  constructor(private moviePageSvc: MoviePageService) { }

  ngOnInit() {
  }

  get ButtonLeftDisabled() {
    if (this.moviePageSvc.page == 1)
      return true;
    return false;
  }

  get ButtonRightDisabled() {
    if (this.moviePageSvc.page == this.moviePageSvc.nrOfPages)
      return true;
    return false;
  }

  get Page() {
    return this.moviePageSvc.page;
  }

  NextPage() {
    this.moviePageSvc.NextPage();
  }

  PrevPage() {
    this.moviePageSvc.PrevPage();
  }
}
