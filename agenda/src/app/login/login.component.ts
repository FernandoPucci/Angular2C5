import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  authError = false;
  dataSource: any = {};

  constructor() { }

  onSubmit() {
    this.authError = false;

    if (this.dataSource.Usuario === 'agenda' && this.dataSource.senha === '123') {
      this.authError = false;
    } else {
      this.authError = true;
    }


  }
}
