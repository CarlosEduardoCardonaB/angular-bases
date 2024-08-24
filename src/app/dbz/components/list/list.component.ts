import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

    @Output()
    public deleteIdCharacter: EventEmitter<string> = new EventEmitter();

    @Input() //con este input le decimos a este componente que puede recibir parámetros desde el llamado donde se renderiza. En este caso se van a enviar propiedades desde el main-page.component.html
    public characterList: Character[]= [{
      id: "",
      name: 'Trunks',
      power: 6000
    }]

    // onDeleteCharater(index: number):void {
    //     console.log(index);
    //     this.deleteIdCharacter.emit(index);
    // }

    onDeleteCharater(id?: string):void {

      if( !id ) return;
      console.log(id);
      this.deleteIdCharacter.emit(id);
  }


  }
