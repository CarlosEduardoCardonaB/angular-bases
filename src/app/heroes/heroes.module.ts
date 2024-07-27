import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./components/hero/hero.component";
import { ListComponent } from "./components/list/list.component";



@NgModule({
  declarations:[
    //Los declarations son los componenetes que están dentro de la carpeta Heroes para este ejemplo
    HeroComponent,
    ListComponent
  ],
  exports:[
    //Y aqui exportamos fuera de la carpeta heroes para que puedan ser usados los componentes que tenemos dentro de ella
    HeroComponent,
    ListComponent
  ],
  imports:[
    CommonModule
  ]
})
export class HeroesModule {

}
