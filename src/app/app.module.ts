import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*Modulos de angularfire*/ 
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

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
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, //importa firebase / firestore, solo es necesario para las características de la base de datos
    AngularFireAuthModule, // importa firebase / auth, solo es necesario para las funciones de autenticación,
    AngularFireStorageModule //Importa Firebase / Storage solo es necesario para las funciones de almacenamiento
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
