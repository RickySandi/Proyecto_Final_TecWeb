import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import{LabelsComponent} from './labels/labels.component';
import{ArtistsComponent} from './artists/artists.component';
import{HomeComponent} from './home/home.component';
import{LabelsFormComponent} from './labels-form/labels-form.component';
import{ArtistsFormComponent} from './artists-form/artists-form.component';
import{LoginFormComponent} from './login-form/login-form.component';
 

const routes: Routes = [
  {
    path: "",
    component: LoginFormComponent 
  },
  {
    path: "home",
    component: HomeComponent 
  },
  
  {
    path: "labels",
    component: LabelsComponent 
  },
  {
    path: "labels-form",
    component: LabelsFormComponent 
  },
  {
    path: "artists",
    component: ArtistsComponent 
  },
  {
    path: "artists-form",
    component: ArtistsFormComponent 
  },
  {
    path: "login-form",
    component: LoginFormComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
