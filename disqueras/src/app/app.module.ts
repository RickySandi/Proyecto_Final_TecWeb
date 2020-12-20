import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LabelsComponent } from './labels/labels.component';
import { ArtistsComponent } from './artists/artists.component';
import { HomeComponent } from './home/home.component';
import { LabelsFormComponent } from './labels-form/labels-form.component';
import { ArtistsFormComponent } from './artists-form/artists-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LabelsService } from './labels.service'; 

@NgModule({
  declarations: [
    AppComponent,
    LabelsComponent,
    ArtistsComponent,
    HomeComponent,
    LabelsFormComponent,
    ArtistsFormComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [LabelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
