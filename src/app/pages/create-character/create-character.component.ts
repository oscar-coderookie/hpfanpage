
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PlayersService } from 'src/app/shared/services/players.service';


@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.scss'],
})
export class CreateCharacterComponent implements OnInit {
  addNewCharacterForm :any = FormGroup;
 
  constructor(public playersService: PlayersService, private _builder: FormBuilder) {

    this.addNewCharacterForm = this._builder.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      species: ['', Validators.required],
      image: ['', Validators.required]
    })
  }

  ngOnInit(): void {}

  addNewCharacter(values:any){

    const newFormData = {name: values.name, species: values.species, gender: values.gender, image: values.image};
    this.playersService.addCharacter(newFormData).subscribe(data => {
        console.log(data);
        alert('Personaje creado correctamente');
        window.location.href="/characters";
    })
    

  }

  // addNewCharacter(form:any){
    
  //   this.playersService.addCharacter(newFormData).subscribe(data => {

  //   })
  // }
 
}
