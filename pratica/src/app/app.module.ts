import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MeuComponent } from './meu/meu.component';
import { OutroComponent } from './outro/outro.component';


@NgModule({
  declarations: [
    AppComponent,
    MeuComponent,
    OutroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
