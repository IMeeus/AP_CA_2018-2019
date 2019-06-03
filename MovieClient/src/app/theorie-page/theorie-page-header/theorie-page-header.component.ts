import { Component, OnInit } from '@angular/core';
import { TheoriePageService } from '../theorie-page.service';

@Component({
  selector: 'app-theorie-page-header',
  templateUrl: './theorie-page-header.component.html',
  styleUrls: ['./theorie-page-header.component.css']
})
export class TheoriePageHeaderComponent implements OnInit {
  constructor(private theoriePageSvc: TheoriePageService) { }

  ngOnInit() {
  }

  get Movie() {
    return this.theoriePageSvc.movie;
  }
}