import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegueta',
    power: 7500
  }
  //,{
  //   name: 'Picollo',
  //   power: 2300
  // },{
  //   name: 'Yamtcha',
  //   power: 300
  // }
];

  onNewCharacter ( character: Character ): void {

    // const newCharacter: Character = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power
    // }

    //Otra forma de hacer esta declaración de arriba es de la siguiente forma, donde le decimos al programa que todos los campos del character los añada al objeto newCharacter sin declarar uno a uno sus campos
    const newCharacter: Character = {...character}

    this.characters.push(newCharacter);

    //console.log('main page: ', character);
  }

  // onDeleteCharacter (id: number):void{
  //   this.characters.splice(id, 1);
  // }

  onDeleteCharacterById(id: string): void{
    this.characters = this.characters.filter( character => character.id !== id);
  }

  constructor() { }

}
