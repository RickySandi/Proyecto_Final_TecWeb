import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app'; 
import "firebase/firestore";
import {Router} from '@angular/router';
import {ArtistsService} from '../artists.service';
import {LoginService} from '../login.service'; 

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  artists = [];
  isLoggedIn = this.loginService.isLoggedIn(); 
  constructor(
    public router: Router,
    public loginService: LoginService,
    public artistsService: ArtistsService 

    ) 
    { }

  async ngOnInit() {
    this.artists = await this.artistsService.getArtists();
  }

async editArtist(id:string){
  this.router.navigate(["/artists-form"],{queryParams:{id}}); 

}
async deleteArtist(id:string){
   await this.artistsService.deleteArtist(id); 
    this.artists = await this.artistsService.getArtists(); 
}
}
