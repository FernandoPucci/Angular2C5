import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '../base.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'outro',
  templateUrl: './outro.component.html',
  styleUrls: ['./outro.component.css']
})
export class OutroComponent extends BaseComponent {

  meuMetodo() {
    alert('this is another method, from another components!');
  }
}
