import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/shared/services/players.service';

@Component({
  selector: 'app-players-page',
  templateUrl: './players-page.component.html',
  styleUrls: ['./players-page.component.scss'],
})
export class PlayersPageComponent implements OnInit {
  arrayCharacters: any[] = [];

  constructor(private playersService: PlayersService) {}

  ngOnInit(): void {
    this.playersService.getCharacters().subscribe((charactersData: any) => {
      this.arrayCharacters = charactersData;
    });
  }
}
