import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/AirBnb/services/auth.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signinForm!:FormGroup;
  submitted=false ;
  Email!:string;
  Password!:string

  constructor(private formBuilder:FormBuilder,) { }
 
  ngOnInit(): void {
    this.signinForm=this.formBuilder.group({
      Email:['',[Validators.required,Validators.email]],
       Password:['',[Validators.required,Validators.minLength(6)]],
    })
  }
 

  

   logIn() {
 this.submitted=true

// this.auth.logIn(this.Email,this.Password);
// this.Email="";
// this.Password="";
 
}


}