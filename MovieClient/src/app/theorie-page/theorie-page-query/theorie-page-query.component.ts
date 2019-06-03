import { Component, OnInit } from '@angular/core';
import { TheoriePageService } from '../theorie-page.service';

@Component({
  selector: 'app-theorie-page-query',
  templateUrl: './theorie-page-query.component.html',
  styleUrls: ['./theorie-page-query.component.css']
})
export class TheoriePageQueryComponent implements OnInit {

  constructor(private theoriePageSvc: TheoriePageService) { }

  ngOnInit() {
  }

  get WriterInputDisabled() {
    if (this.theoriePageSvc.creatorPageOpen)
      return true;
    return false;
  }

  get Writer(): string {
    return this.theoriePageSvc.Writer;
  }

  set Writer(value: string) {
    this.theoriePageSvc.Writer = value;
  }
}
