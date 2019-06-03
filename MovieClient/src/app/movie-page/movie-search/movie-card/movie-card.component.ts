import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../../movie-page.service';
import { TheoriePageService } from '../../../theorie-page/theorie-page.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input()
  movie: IMovie;

  constructor(private theoriePageSvc: TheoriePageService) { }

  ngOnInit() {
  }

  NotifyTheoriePage() {
    this.theoriePageSvc.Movie = this.movie;
  }
}