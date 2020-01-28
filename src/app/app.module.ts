import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ContainerAvatarComponent } from './components/shared/container-avatar/container-avatar.component';
import { FormComponent } from './components/shared/form/form.component';
import { LoginComponent } from './components/login/login.component';

import { StartWelcomeComponent } from './components/startwelcome/startwelcome.component';
import { SigninComponent } from './components/signin/signin.component';
import { StartComponent } from './components/start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerAvatarComponent,
    FormComponent,
    LoginComponent,
    StartWelcomeComponent,
    SigninComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
