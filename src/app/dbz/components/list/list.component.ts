import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

    @Input() //con este input le decimos a este componente que puede recibir parámetros desde el llamado donde se renderiza. En este caso se van a enviar propiedades desde el main-page.component.html
    public characterList: Character[]= [{
      name: 'Trunks',
      power: 6000
    }]
}
