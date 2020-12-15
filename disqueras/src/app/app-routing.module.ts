import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{LabelsComponent} from './labels/labels.component';
import{ArtistsComponent} from './artists/artists.component';
 

const routes: Routes = [
  {
    path: "labels",
    component: LabelsComponent 
  },
  {
    path: "artists",
    component: ArtistsComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
