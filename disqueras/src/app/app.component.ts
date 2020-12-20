import { Component } from '@angular/core';
import firebase from 'firebase/app';
import "firebase/firestore";
import { LoginService } from "./login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'disqueras';
  isLoggedIn = false;

  constructor(
    public loginService: LoginService
  ) { }


  async ngOnInit() {
    await this.initFirebase();
    this.loginService.initializeListener();
    this.loginService.authStateChanged.subscribe(res => {
      this.isLoggedIn = this.loginService.isLoggedIn();
    });
  }

  async initFirebase() {
    const firebaseConfig = {
      apiKey: "AIzaSyBiXbu2kjBh7KRosLew3vl1jlTA0bK4j7w",
      authDomain: "proyecto-final-tecweb.firebaseapp.com",
      projectId: "proyecto-final-tecweb",
      storageBucket: "proyecto-final-tecweb.appspot.com",
      messagingSenderId: "996544364277",
      appId: "1:996544364277:web:1a5b62965c5c6e366bcfbc",
      measurementId: "G-BF04194TRJ"
    };
    // Initialize Firebase
    await firebase.initializeApp(firebaseConfig);

  }

}
