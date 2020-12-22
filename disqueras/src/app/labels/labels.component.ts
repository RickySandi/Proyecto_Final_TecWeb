import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app'; 
import "firebase/firestore";
import {Router} from '@angular/router';
import {LabelsService} from '../labels.service';
import {LoginService} from '../login.service'; 



@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent implements OnInit {

  labels = [];
  isLoggedIn = this.loginService.isLoggedIn();
  filteredLabels = [];
  filterInput = "";

  constructor(
    public router: Router, 
    public labelsService: LabelsService,
    public loginService: LoginService 
    ) { }

  async ngOnInit() {
    this.labels = await this.labelsService.getLabels();
    this.filteredLabels = this.labels;



  }
  async editLabel(id:string){
    this.router.navigate(["/labels-form"],{queryParams:{id}}); 

  }
  async deleteLabel(id:string){
    await this.labelsService.deleteLabel(id); 
    this.labels = await this.labelsService.getLabels(); 
  }
  filter(event: any) {
    this.filteredLabels = this.labels.filter(label => label.name.includes(event));
    console.log(this.filteredLabels);
  }
}
