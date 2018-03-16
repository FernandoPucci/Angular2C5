import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { FormComponent } from './main/form/form.component';
import { ListaComponent } from './main/lista/lista.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    FormComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
