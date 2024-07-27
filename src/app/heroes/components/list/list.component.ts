import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Hulk', 'Thor', 'Ironman', 'Captain']
  public deleteHero?: string; //El ? sirve lo mismo que igualar a '', o sea que puede ser vacío.

  removeLastHero(): void{
    this.deleteHero = this.heroNames.pop();
    console.log(this.deleteHero);
  }

}
