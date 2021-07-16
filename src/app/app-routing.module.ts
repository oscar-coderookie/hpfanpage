import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCharacterComponent } from './pages/create-character/create-character.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HousesComponent } from './pages/houses/houses.component';
import { MarkersComponent } from './pages/markers/markers.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { PlayersPageComponent } from './pages/players-page/players-page.component';

const routes: Routes = [

  {path: '', component: HomePageComponent},
  {path: 'characters', component:PlayersPageComponent},
  {path:'movies', component: MoviesComponent},
  {path: 'houses', component:HousesComponent },
  {path: 'characters/:id', component: MarkersComponent},
  {path: 'create', component: CreateCharacterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
