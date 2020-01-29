import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NaturalizateService } from '../../services/naturalizate.service';
import { UserI } from '../../models/user.interface';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  constructor(public servicesnaturalizate:NaturalizateService) { }

  ngOnInit() {
  }




  
}
