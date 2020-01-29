import { Component, OnInit, ViewChild } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NaturalizateService } from '../../services/naturalizate.service';
import { UserI } from '../../models/user.interface';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @ViewChild('myForm', {static: false}) formValues; 

//json donde guardo la informacion que viene en el formulario
signInForm = new FormGroup({
  email: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required),
})


  constructor(public servicesnaturalizate:NaturalizateService) { }

  ngOnInit() {
  }

  signIn(form:UserI){
    this.servicesnaturalizate.createAccount(form);
    this.formValues.resetForm(); 
   }


  
}
