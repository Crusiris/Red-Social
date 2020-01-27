import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ContainerAvatarComponent } from './components/shared/container-avatar/container-avatar.component';
import { FormComponent } from './components/shared/form/form.component';
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { StartWelcomeComponent } from './components/start-welcome/start-welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerAvatarComponent,
    FormComponent,
    LoginComponent,
    SignInComponent,
    StartWelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
