import { Component, OnInit,  } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { FormGroup,FormBuilder, Validators, NgForm } from '@angular/forms';
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
 test:any

  constructor(private formBuilder:FormBuilder,private authservice:AuthenticationService,public router:Router) { }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      name:['',[Validators.required,Validators.minLength(5)]],
      password:['',[Validators.required,Validators.minLength(6)]],
      // birthdate:['',Validators.required],
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


  signUp(data:NgForm){
   this.submitted=true;
  this.test=data.value
// if(this.signupForm.invalid){}

const{name,password,email}=this.test
// console.log(email)
// console.log(Name)
// console.log(Password)



this.authservice.signup(name,password,email).pipe(
  
).subscribe(()=>{
  this.router.navigate(["home-pg"])
})
//    this.auth.signUp(this.Email,this.Password);
// this.Email="";
// this.Password="";

    
  }



}
