import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-players-gallery',
  templateUrl: './players-gallery.component.html',
  styleUrls: ['./players-gallery.component.scss']
})
export class PlayersGalleryComponent implements OnInit {

  @Input() characters:any;
  constructor() { }

  ngOnInit(): void {
  }

}
