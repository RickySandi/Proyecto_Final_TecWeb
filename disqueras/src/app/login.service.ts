import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import "firebase/auth";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authStateChanged = new Subject<boolean>();
  constructor() { }

  initializeListener() {
    firebase.auth().onAuthStateChanged(user => {  //escuchar cambios
      this.authStateChanged.next(true);
    });
  }

  async login(email, password) {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  }

  async logout() {
    await firebase.auth().signOut();
  }

  isLoggedIn() {
    const user = firebase.auth().currentUser;
    console.log(user);
    return Boolean(user);
    //return true; 

  }
}
