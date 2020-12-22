import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor() { }

  async getArtists(){
    const db = firebase.firestore(); 

    return await db.collection("artists").get().then(function(querySnapshot) {
    const artists = []; 
    querySnapshot.forEach(function(doc) {
        artists.push(doc.data()); 
    });
    return artists 
});
}
  async deleteArtist(id:string){
    const db = firebase.firestore(); 
    await db.collection("artists").doc(id).delete(); 
}
async save(artist, isNew) {
  console.log(artist);
  const db = firebase.firestore();
  if (isNew) {
    const id = await db.collection("artists").doc().id;
    artist.id = id;
  }
  await db.collection("artists").doc(artist.id).set(artist);
  
}
async get(id){
  const db = firebase.firestore();
  return (await db.collection("artists").doc(id).get()).data();  

}
async getArtistsDic(){
  const artists = await this.getArtists();
  const artistsDic = {};

  artists.forEach(artist =>{
    if(!artistsDic.hasOwnProperty(artist.label)){
      artistsDic[artist.label] = []; 
    }
    artistsDic[artist.label].push(artist.name);
  });
  return artistsDic;
}

}
