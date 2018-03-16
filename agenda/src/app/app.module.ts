import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { appRouting } from './app.routing';
import { AppComponent } from './app.component';


import { MainModule } from './main/main.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { AppService } from './app.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    appRouting,
    BrowserModule,
    MainModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AppService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
