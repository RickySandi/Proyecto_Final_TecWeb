import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class LabelsService {


  constructor() { }

  async getLabels() {
    const db = firebase.firestore();

    return await db.collection("labels").get().then(function (querySnapshot) {
      const labels = [];
      querySnapshot.forEach(function (doc) {
        labels.push(doc.data());
      });
      return labels
    });
  }
  async deleteLabel(id: string) {
    const db = firebase.firestore();
    await db.collection("labels").doc(id).delete();
  }
  async save(label, isNew) {
    console.log(label);
    const db = firebase.firestore();
    if (isNew) {
      const id = await db.collection("labels").doc().id;
      label.id = id;
    }
    await db.collection("labels").doc(label.id).set(label);
    
  }
  async get(id){
    const db = firebase.firestore();
    return (await db.collection("labels").doc(id).get()).data();  

  }
  async getLabelsDic(){
    const labels = await this.getLabels();
    const labelsDic = {};

    labels.forEach(label =>{
    labelsDic[label.id] = label.name; 
    });
    return labelsDic;
  }
  
  }


