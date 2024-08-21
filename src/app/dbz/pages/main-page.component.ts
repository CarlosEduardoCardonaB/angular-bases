import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

  public characters: Character[] = [{
    name: 'Krilin',
    power: 1000
  },{
    name: 'Goku',
    power: 9500
  },{
    name: 'Vegueta',
    power: 7500
  },{
    name: 'Picollo',
    power: 2300
  },{
    name: 'Yamtcha',
    power: 300
  }];

  onNewCharacter ( character: Character ): void {
    console.log('main page: ', character);
  }

}
