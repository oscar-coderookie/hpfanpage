import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {

  public urlBase = "https://test-gatsby-portfolio-default-rtdb.europe-west1.firebasedatabase.app/movies"
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get(this.urlBase + '.json');
  }

  getMovie(idMovie: any) {
    return this.http.get('http://localhost:3000/movies' + idMovie);
  }
}
