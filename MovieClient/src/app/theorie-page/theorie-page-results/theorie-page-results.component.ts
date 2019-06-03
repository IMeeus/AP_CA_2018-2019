import { Component, OnInit } from '@angular/core';
import { TheoriePageService } from '../theorie-page.service';
import { TheorieService, ITheory } from '../../theorie.service';
import { AuthService, IUser } from 'src/app/auth.service';

@Component({
  selector: 'app-theorie-page-results',
  templateUrl: './theorie-page-results.component.html',
  styleUrls: ['./theorie-page-results.component.css']
})
export class TheoriePageResultsComponent implements OnInit {
  user: IUser;

  constructor(private theoriePageSvc: TheoriePageService, private theorieSvc: TheorieService, private AuthSvc: AuthService) { }

  ngOnInit() {
    this.LoadUser();
  }

  get Theories(): ITheory[] {
    return this.theoriePageSvc.theories;
  }

  LoadUser() {
    this.AuthSvc.user.subscribe((result) => {
      this.user = result;
    })
  }

  ShowCreator() {
    this.theoriePageSvc.resultsPageOpen = false;
    this.theoriePageSvc.creatorPageOpen = true;
  }
}
