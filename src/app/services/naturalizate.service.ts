import { Injectable } from '@angular/core';


import { Observable, from } from 'rxjs';
import { AngularFirestore,  AngularFirestoreCollection } from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth'
import { auth } from 'firebase/app';
import { UserI } from '../models/user.interface';



@Injectable({
  providedIn: 'root'
})
export class NaturalizateService {
//Variable donde se guarda el usuario activo
public userData:Observable<firebase.User>

//Inicializo angular fire en el constructor
constructor(public afAuth: AngularFireAuth) { 
  //Metodo para obtener datos del usuario activo
  this.userData= afAuth.authState;
}

//Metodo para iniciar sesion con email y password
loginByEmail(user:UserI){
  //metodo destructori para descomponer el objeto en propiedades
      const { email, password } = user;
     return this.afAuth.auth.signInWithEmailAndPassword(email, password)
 
}
      
 
//Metodo para logear usuario con google

loginGoogleUser() {
  return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
}

//Metodo para cerrar sesion

logoutUser() {
  return this.afAuth.auth.signOut();
}

//Metodo para registrar a usuario nuevo 
createAccount(user:UserI){
  return new Promise((resolve, reject)=>{
    //metodo destructori para descomponer el objeto en propiedades
          const { email, password } = user;
          this.afAuth.auth.createUserWithEmailAndPassword(email, password)
          .then(res =>{
            resolve(res)
            this.checkmail()
          } ,
          err=>reject(err))
      })
}

//Verificacion de correo
checkmail(){
 
  this.afAuth.auth.currentUser.sendEmailVerification()
        .then(function() {
            // Email sent.
            alert(`Por favor verifique su correo`);

        }).catch(function(error) {
            // An error happened.
            console.log(error)
        });
}
}




