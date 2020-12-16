import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app'; 
import "firebase/firestore";
import {Router} from '@angular/router';



@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent implements OnInit {

  labels = []; 
  constructor(public router: Router) { }

  async ngOnInit() {
    await this.getLabels();
  }

  async getLabels(){
    const db = firebase.firestore(); 

    this.labels = await db.collection("labels").get().then(function(querySnapshot) {
    const labels = []; 
    querySnapshot.forEach(function(doc) {
        labels.push(doc.data()); 
    });
    return labels 
});
}
  async editLabel(id:string){
    this.router.navigate(["/labels-form"],{queryParams:{id}}); 

  }
  async deleteLabel(id:string){
    const db = firebase.firestore(); 

    await db.collection("labels").doc(id).delete(); 
    this.getLabels(); 
  }
}
