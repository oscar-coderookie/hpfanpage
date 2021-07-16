import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { SimplebarAngularModule } from 'simplebar-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PlayersPageComponent } from './pages/players-page/players-page.component';
import { PlayersGalleryComponent } from './shared/components/players-gallery/players-gallery.component';
import { HeaderComponent } from './core/pages/header/header.component';
import { MarkersComponent } from './pages/markers/markers.component';
import { HttpClientModule } from '@angular/common/http';
import { HousesComponent } from './pages/houses/houses.component';
import { MoviesGalleryComponent } from './shared/components/movies-gallery/movies-gallery.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { CreateCharacterComponent } from './pages/create-character/create-character.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PlayersPageComponent,
    PlayersGalleryComponent,
    HeaderComponent,
    MarkersComponent,
    HousesComponent,
    MoviesGalleryComponent,
    MoviesComponent,
    CreateCharacterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SimplebarAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
