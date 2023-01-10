import { Component, OnInit,  } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/AirBnb/services/auth.service';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

 signupForm!:FormGroup;
 submitted=false 
 Email!:string;
 Password!:string


  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      firstName:['',[Validators.required,Validators.minLength(5)]],
      Password:['',[Validators.required,Validators.minLength(6)]],
      Birthdate:['',Validators.required],
      Email:['',[Validators.required,Validators.email]]

    })
  }
 


  signUp(){
   this.submitted=true;

//    this.auth.signUp(this.Email,this.Password);
// this.Email="";
// this.Password="";

    
  }



}
