import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import "firebase/firestore";
import { Router, ActivatedRoute } from '@angular/router';
import {LabelsService} from '../labels.service';

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
    year: "",
    artist:[]
  };
  isNew = true;
  constructor(
    public router: Router, 
    public route: ActivatedRoute, 
    public labelsService: LabelsService
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
      this.labelsService.get(id); 
    }
  }
  async save() {
    await this.labelsService.save(this.label, this.isNew); 
    this.router.navigate(["/labels"]);
  }
}
