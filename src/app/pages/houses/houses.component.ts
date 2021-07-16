import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit {

  shields:any ={
    shieldSly: "https://upload.wikimedia.org/wikipedia/commons/3/34/Slytherin.png",
    shieldHuf: "https://static.wikia.nocookie.net/esharrypotter/images/4/42/Hufflepuff_Pottermore.png/revision/latest/scale-to-width-down/204?cb=20141001131135",
    shieldGry:"https://wallpaperaccess.com/full/864844.jpg",
    shieldRav: "https://w7.pngwing.com/pngs/451/45/png-transparent-ravenclaw-wall-decor-harry-potter-ravenclaw-house-lord-voldemort-hogwarts-hermione-granger-harry-potter-retail-logo-mobile-phones.png"
  
  }
    

  constructor() { }

  ngOnInit(): void {
  }

}
