import { getLocaleNumberSymbol } from '@angular/common';
import { Component } from '@angular/core';
import firebase from 'firebase/app'; 
import "firebase/firestore"; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'disqueras';
  

  async ngOnInit(){
    this.initFirebase();
    
  }

  initFirebase(){
    const  firebaseConfig = {
      apiKey: "AIzaSyBiXbu2kjBh7KRosLew3vl1jlTA0bK4j7w",
      authDomain: "proyecto-final-tecweb.firebaseapp.com",
      projectId: "proyecto-final-tecweb",
      storageBucket: "proyecto-final-tecweb.appspot.com",
      messagingSenderId: "996544364277",
      appId: "1:996544364277:web:1a5b62965c5c6e366bcfbc",
      measurementId: "G-BF04194TRJ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  }

}
