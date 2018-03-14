import { Component } from '@angular/core';
import { BaseComponent } from '../base.component';



@Component({
  // tslint:disable-next-line:component-selector
  selector: 'meu',
  templateUrl: './meu.component.html',
  styleUrls: ['./meu.component.css']
})

export class MeuComponent extends BaseComponent {

  meuMetodo() {
    alert('Huhu yeye!!');
  }
}
