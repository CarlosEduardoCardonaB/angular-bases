import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { CounterModule } from './counter/components/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';
// import { CounterComponent } from './counter/counter.component';
// import { HeroComponent } from './heroes/hero/hero.component';
// import { ListComponent } from './heroes/list/list.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
    //Estas importaciones se usaron antes de encapsular estos componentes en los módulos que se importan en imports
    // CounterComponent,
    // HeroComponent,
    // ListComponent
  ],
  //Todos los módulos siempre van en este import
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
