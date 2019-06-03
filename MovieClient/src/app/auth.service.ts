import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  accessToken: any;
  user: Observable<IUser>;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
      this.user = this.afAuth.authState;
  }
 
  async GoogleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    await this.afAuth.auth.signInWithPopup(provider);
    return this.router.navigate(['movies'])
  }

  async SignOut() {
    await this.afAuth.auth.signOut();
    return this.router.navigate(['login']);
  }
}

export interface IUser {
  uid: string,
  email: string,
  displayName?: string
}