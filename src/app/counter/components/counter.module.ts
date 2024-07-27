import { NgModule } from "@angular/core";
import { CounterComponent } from "./counter/counter.component";


@NgModule({
  declarations: [
    CounterComponent
  ],
  //Estos exports de estos módulos los usamos cuando queremos exponer un componente para el uso externo, o sea en este ejemplo para usarlo de la carpeta counter para afuera.
  //por ejemplo al exportarlo ya lo podemos usar en el app.module.ts
  exports:[
    CounterComponent
  ]
})
export class CounterModule {

}
