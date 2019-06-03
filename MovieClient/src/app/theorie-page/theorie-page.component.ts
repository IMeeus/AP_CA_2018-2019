import { Component, OnInit } from '@angular/core';
import { TheoriePageService } from './theorie-page.service';

@Component({
  selector: 'app-theorie-page',
  templateUrl: './theorie-page.component.html',
  styleUrls: ['./theorie-page.component.css']
})
export class TheoriePageComponent implements OnInit {

  constructor(private theoriePageSvc: TheoriePageService) { }

  ngOnInit() {
  }

  get Movie() {
    return this.theoriePageSvc.movie;
  }

  get ResultsPageOpen() {
    return this.theoriePageSvc.resultsPageOpen;
  }

  get CreatorPageOpen() {
    return this.theoriePageSvc.creatorPageOpen;
  }
}
