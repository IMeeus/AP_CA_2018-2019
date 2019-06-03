import { Component, OnInit } from '@angular/core';
import { TheoriePageService } from '../theorie-page.service';
import { TheorieService, ITheory } from '../../theorie.service';
import { AuthService, IUser } from '../../auth.service';

@Component({
  selector: 'app-theorie-creator',
  templateUrl: './theorie-creator.component.html',
  styleUrls: ['./theorie-creator.component.css']
})
export class TheorieCreatorComponent implements OnInit {
  user: IUser;
  title: string;
  description: string;

  constructor(private theoriePageSvc: TheoriePageService, private theorieSvc: TheorieService, private authSvc: AuthService) { }

  ngOnInit() {
    this.LoadUser();
  }

  get Title() {
    return this.title;
  }

  set Title(value: string) {
    this.title = value;
  }

  get Description() {
    return this.description;
  }

  set Description(value: string) {
    this.description = value;
  }

  LoadUser() {
    this.authSvc.user.subscribe((result) => {
      this.user = result;
    })
  }

  GoBack() {
    this.theoriePageSvc.creatorPageOpen = false;
    this.theoriePageSvc.resultsPageOpen = true;
  }

  CreateTheorie() {
    let newTheorie: ITheory = {
      imdbID: this.theoriePageSvc.movie.imdbID,
      title: this.title,
      description: this.description,
      writer: this.user.displayName,
      created: Date.now()
    };
    
    this.theorieSvc.CreateTheorie(newTheorie).subscribe((results) => {
      this.theoriePageSvc.GetTheories(this.theoriePageSvc.ImdbId, this.theoriePageSvc.writer);
    }, (error) => {
      console.log(error);
    });

    this.GoBack();
  }
}
