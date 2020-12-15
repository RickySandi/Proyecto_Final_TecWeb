import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app'; 
import "firebase/firestore";

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  artists = []; 
  constructor() { }

  async ngOnInit() {
    await this.getArtists();
  }

  async getArtists(){
    const db = firebase.firestore(); 

    this.artists = await db.collection("artists").get().then(function(querySnapshot) {
    const artists = []; 
    querySnapshot.forEach(function(doc) {
        artists.push(doc.data()); 
    });
    return artists 
});
}

}
