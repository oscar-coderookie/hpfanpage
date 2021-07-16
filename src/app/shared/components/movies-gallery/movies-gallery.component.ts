import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-gallery',
  templateUrl: './movies-gallery.component.html',
  styleUrls: ['./movies-gallery.component.scss']
})
export class MoviesGalleryComponent implements OnInit {

  @Input() movies:any;

  constructor() { }

  ngOnInit(): void {
  }

}
