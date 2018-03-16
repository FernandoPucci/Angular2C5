import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  authError = false;
  dataSource: any = {};

  constructor(
    private serviceHelper: AppService,
    private router: Router
  ) { }

  onSubmit() {

    this.authError = false;

    if (this.dataSource.Usuario === undefined) {
      alert('Digite um nome de usuário!');
      return;
    }

    if (this.dataSource.Usuario === 'agenda' && this.dataSource.Senha === '123') {
      localStorage.setItem(this.serviceHelper.AUTH_COOKIE, 'Usuário Logado!');
      this.router.navigate(['']);
    } else {
      this.authError = true;
    }
  }
}
