import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  //Con esta opción de template podemos incrustar html sin crear otro archivo de html. Esto solo es recomendable cuando son por mucho 4 lineas de html
  template: `<h3>Counter del counter component: {{ counter }}</h3>

    <button (click)="increaseBy(1)">+ 1</button>
    <button  (click)="resetCounter()">Reset</button>
    <button  (click)="increaseBy(-1)">- 1</button>
  `
})

export class CounterComponent {
  constructor() { }

  public counter: number = 10;


  increaseBy(value:number):void{
   this.counter += value
  }

  resetCounter():void{
    this.counter = 10;
  }
}
