import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from 'src/app/AirBnb/services/auth.service';
import { AuthenticationService } from 'src/app/AirBnb/services/authentication.service';
import { Router } from '@angular/router';

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

  constructor(private formBuilder:FormBuilder,private authservice:AuthenticationService,public router:Router) { }
 
  ngOnInit(): void {
    this.signinForm=this.formBuilder.group({
      Email:['',[Validators.required,Validators.email]],
       Password:['',[Validators.required,Validators.minLength(6)]],
    })
  }
 


 signIn() {
 this.submitted=true

 if(this.signinForm.invalid){
  return
 }

const{Email,Password}=this.signinForm.value

this.authservice.login(Email,Password).subscribe(()=>{
  // return this.router.navigate('');
})
// this.auth.logIn(this.Email,this.Password);
// this.Email="";
// this.Password="";
 
}


}