import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './compenents/login/login.component';
import { SignUpComponent } from './compenents/sign-up/sign-up.component';
import { HomeComponent } from './compenents/home/home.component';
import { guardGuard } from './guard.guard';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signUp",
    component: SignUpComponent
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [guardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
