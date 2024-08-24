import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: '',
    name: '',
    power: 0
  };

  emitCharacter():void{

    //Esta directriz "debugger" nos hace un brake point en el navegador para depurar nuestra aplicación
    //debugger;
    this.character.id = uuid();
    console.log(this.character);

    if( this.character.name.length === 0 ) return;

    //Esta emisión la vamos a enviar al main-page.component.html
    this.onNewCharacter.emit(this.character);

    // this.character.name = '';
    // this.character.power = 0;

    //Esto mismo de aqui arrba lo podemos hacer asi:
    this.character = {id: '', name: '', power: 0}
  }

}
