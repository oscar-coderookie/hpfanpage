import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from 'src/app/shared/services/players.service';

@Component({
  selector: 'app-markers',
  templateUrl: './markers.component.html',
  styleUrls: ['./markers.component.scss']
})
export class MarkersComponent implements OnInit {
  characters:any;
  idCharacter:any;

  constructor(private route: ActivatedRoute, private playersService:PlayersService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((route:any) => {
      console.log(route.get("id"))
      const idCharacter = route.get("id");

      

      this.playersService.getCharacter(idCharacter).subscribe((characterData:any) => {
        this.characters = characterData;
        console.log(characterData)
      })
    })
  }

}
