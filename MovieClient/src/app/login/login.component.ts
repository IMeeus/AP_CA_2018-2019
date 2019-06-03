import { Component, OnInit } from '@angular/core';
import { AuthService, IUser } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authSvc : AuthService) { }

  ngOnInit() {
    this.GetUser();
  }

  GetUser() {
    this.authSvc.user.subscribe((result) => {
      console.log(result);
    })
  }

  SignIn() {
    this.authSvc.GoogleSignIn();
  }

  SignOut() {
    this.authSvc.SignOut();
  }
}
