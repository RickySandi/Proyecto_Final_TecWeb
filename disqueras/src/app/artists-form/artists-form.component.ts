import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import "firebase/firestore";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artists-form',
  templateUrl: './artists-form.component.html',
  styleUrls: ['./artists-form.component.scss']
})
export class ArtistsFormComponent implements OnInit {

  artist: any = {
    id: "",
    name: "",
    country: "",
    year: "",
    genre: "",
    label: ""
  };
  isNew = true; 
  constructor(
    public router: Router, 
    public route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params["id"]);
      const id = params["id"];
      this.isNew = (id == undefined);
      this.init(id);
      console.log(this.isNew);
    })
  }

  init(id) {
    if (!this.isNew) {
      this.get(id); 

    }

  }

  async save() {
    console.log(this.artist);
    const db = firebase.firestore();
    if (this.isNew) {
      const id = await db.collection("artists").doc().id;
      this.artist.id = id;
    }
    await db.collection("artists").doc(this.artist.id).set(this.artist);
    this.router.navigate(["/artists"]);
  }

  async get(id){
    const db = firebase.firestore();
    this.artist = (await db.collection("artists").doc(id).get()).data();  

  }

}
