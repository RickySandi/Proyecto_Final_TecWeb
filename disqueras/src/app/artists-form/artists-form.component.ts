import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import "firebase/firestore";
import { Router, ActivatedRoute } from '@angular/router';
import {ArtistsService} from '../artists.service';
import {LabelsService} from '../labels.service';

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
  labels= []; 
  constructor(
    public router: Router, 
    public route: ActivatedRoute,
    public artistsService: ArtistsService,
    public labelsService: LabelsService
    ) {}

  async ngOnInit() {
    this.route.queryParams.subscribe(async params => {
      console.log(params["id"]);
      const id = params["id"];
      this.isNew = (id == undefined);
      await this.init(id);
      console.log(this.isNew);
    })
  }

  async init(id) {
    if (!this.isNew) {
      this.artist = await this.artistsService.get(id); 
    }
      this.labels = await this.labelsService.getLabels();
      console.log(this.labels); 

  }

  async save() {
    await this.artistsService.save(this.artist, this.isNew); 
    this.router.navigate(["/artists"]);
  }
}
