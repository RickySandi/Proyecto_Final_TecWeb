import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app'; 
import "firebase/firestore";
import {Router} from '@angular/router';
import {ArtistsService} from '../artists.service';
import {LabelsService} from '../labels.service';
import {LoginService} from '../login.service'; 

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  artists = [];
  labelsDic = {}; 
  isLoggedIn = this.loginService.isLoggedIn(); 
  constructor(
    public router: Router,
    public loginService: LoginService,
    public artistsService: ArtistsService,
    public labelsService: LabelsService

    ) 
    { }

  async ngOnInit() {
    this.artists = await this.artistsService.getArtists();
    this.labelsDic = await this.labelsService.getLabelsDic(); 
    console.log(this.labelsDic);
  }

async editArtist(id:string){
  this.router.navigate(["/artists-form"],{queryParams:{id}}); 

}
async deleteArtist(id:string){
   await this.artistsService.deleteArtist(id); 
    this.artists = await this.artistsService.getArtists(); 
}
  // async viewInfo(id:string){
   

  // }
}
