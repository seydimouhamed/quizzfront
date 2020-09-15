import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthGuard } from './_helpers/auth.guard';
import { RegisterComponent } from './register/register.component';
import { ListjoueurComponent } from './listjoueur/listjoueur.component';
import { CreerquestionComponent } from './creerquestion/creerquestion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListquestionComponent } from './listquestion/listquestion.component';
import { Creerquestion2Component } from './creerquestion2/creerquestion2.component';

const routes: Routes = [
  {path: '', redirectTo:'home',pathMatch: 'full'},
  {path: 'home', component: HomeComponent,children:[
    {path: '', component: ListjoueurComponent,outlet:"home"},
    {path: 'addAdmin', component: RegisterComponent,outlet:"home"},
    {path: 'joueurs', component: ListjoueurComponent,outlet:"home"},
    {path: 'questions', component: ListquestionComponent,outlet:"home"},
    {path: 'addQuestion', component: CreerquestionComponent,outlet:"home"},
    {path: 'dashboard', component: DashboardComponent,outlet:"home"}
  ],canActivate: [AuthGuard]},
  {path: 'login', component: AuthenticationComponent},
  {path: 'register', component: RegisterComponent},
  {path:'**',redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
