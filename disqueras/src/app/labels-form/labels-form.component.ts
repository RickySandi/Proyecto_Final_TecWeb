import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import "firebase/firestore";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-labels-form',
  templateUrl: './labels-form.component.html',
  styleUrls: ['./labels-form.component.scss']
})
export class LabelsFormComponent implements OnInit {

  label: any = {
    id: "",
    name: "",
    country: "",
    year: ""
  };
  isNew = true;
  constructor(public router: Router, public route: ActivatedRoute) { }

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
    console.log(this.label);
    const db = firebase.firestore();
    if (this.isNew) {
      const id = await db.collection("labels").doc().id;
      this.label.id = id;
    }
    await db.collection("labels").doc(this.label.id).set(this.label);
    this.router.navigate(["/labels"]);
  }

  async get(id){
    const db = firebase.firestore();
    this.label = (await db.collection("labels").doc(id).get()).data();  

  }

}
