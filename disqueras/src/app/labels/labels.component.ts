import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app'; 
import "firebase/firestore";

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent implements OnInit {

  labels = []; 
  constructor() { }

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

}
