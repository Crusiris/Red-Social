import { Component, OnInit, ViewChild } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NaturalizateService } from '../../services/naturalizate.service';
import { UserI } from '../../models/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('myForm', {static: false}) formValues; 

//json donde guardo la informacion que viene en el formulario
lognInForm = new FormGroup({
  email: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required),
})

  constructor( private servicesnaturalizate:NaturalizateService) { }

  ngOnInit() {
    
   
  }

  login(form:UserI){
    this.servicesnaturalizate.loginByEmail(form);
    this.formValues.resetForm();
    }
}
