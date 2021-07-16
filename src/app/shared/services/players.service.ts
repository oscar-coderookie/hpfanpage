import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  
  constructor(private http: HttpClient) {}

  public urlBase = "https://test-gatsby-portfolio-default-rtdb.europe-west1.firebasedatabase.app/";
  

  getCharacters() {
    
    return this.http.get(this.urlBase + '/characters.json');
    
  }


  getCharacter(idCharacter:any){
    console.log(idCharacter);
    return this.http.get(this.urlBase +`/characters/${idCharacter}.json`)
  }

  addCharacter(createResource:any){
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.http.post(`${this.urlBase}/characters.json`, createResource, { headers: httpHeaders})
  }
}
