import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { mainRouting } from './main.routing';
import { FormComponent } from './form/form.component';
import { ListaComponent } from './lista/lista.component';


@NgModule({
  imports: [
    mainRouting,
    CommonModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    MainComponent,
    FormComponent,
    ListaComponent
  ],
  bootstrap: [MainComponent]
})
export class MainModule { }
