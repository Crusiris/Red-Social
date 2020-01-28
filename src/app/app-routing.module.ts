import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartWelcomeComponent } from './components/startwelcome/startwelcome.component';
import { SigninComponent } from './components/signin/signin.component';
import { LoginComponent } from './components/login/login.component';
import { StartComponent } from './components/start/start.component';






const routes: Routes = [
  { path: "home", component:StartWelcomeComponent},
  { path: "signin", component:SigninComponent},
  { path: "login", component:LoginComponent},
  { path: "start", component:StartComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
