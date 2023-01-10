import { Component, OnInit,  } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/AirBnb/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

 signupForm!:FormGroup;
 submitted=false 
//  Email!:string;
//  Password!:string


  constructor(private formBuilder:FormBuilder,private authservice:AuthenticationService,public router:Router) { }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      Name:['',[Validators.required,Validators.minLength(5)]],
      Password:['',[Validators.required,Validators.minLength(6)]],
      Birthdate:['',Validators.required],
      email:['',[Validators.required,Validators.email]]

    })
  }
 
get name(){
  return this.signupForm.get('Name')
}
get email(){
  return this.signupForm.get('email')
}

get password(){
  return this.signupForm.get('Password')
}


  signUp(){
   this.submitted=true;

if(this.signupForm.invalid){}

const{Name,email,Password}=this.signupForm.value
this.authservice.signup(Name,email,Password).pipe(
  
).subscribe(()=>{
  this.router.navigate(["home-pg"])
})
//    this.auth.signUp(this.Email,this.Password);
// this.Email="";
// this.Password="";

    
  }



}
