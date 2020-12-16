import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app'; 
import "firebase/firestore";
import {Router} from '@angular/router';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  artists = []; 
  constructor(public router: Router) { }

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
async editArtist(id:string){
  this.router.navigate(["/artists-form"],{queryParams:{id}}); 

}
async deleteArtist(id:string){
  const db = firebase.firestore(); 

  await db.collection("artists").doc(id).delete(); 
  this.getArtists(); 
}
}
