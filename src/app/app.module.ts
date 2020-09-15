import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import {ErrorInterceptor } from './_helpers/error.interceptor';
import {JwtInterceptor } from '../app/_helpers/jwt.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListjoueurComponent } from './listjoueur/listjoueur.component';
import { ListquestionComponent } from './listquestion/listquestion.component';
import { CreerquestionComponent } from './creerquestion/creerquestion.component';
import { Creerquestion2Component } from './creerquestion2/creerquestion2.component';
import { AdresseComponent } from './adresse/adresse.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthenticationComponent,
    NavbarComponent,
    RegisterComponent,
    DashboardComponent,
    ListjoueurComponent,
    ListquestionComponent,
    CreerquestionComponent,
    Creerquestion2Component,
    AdresseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
