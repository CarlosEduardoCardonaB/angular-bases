import { Character } from '../interfaces/character.interface';
import { DbzService } from './../servicios/dbz.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

  //Declarando en el constructor public podemos acceder a los atributos desde el html, por ejemplo asi: dbzService.characters
  //constructor( public dbzService : DbzService){}

  //Declarando como privado debemos usar getters para acceder a las propiedades y métodos del dbzService
  constructor( private dbzService : DbzService){}

  get characters(): Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id: string): void{
    this.dbzService.onDeleteCharacterById( id );
  }

  onNewCharacterMain (character: Character): void{
    this.dbzService.onNewCharacter( character );
  }

}
