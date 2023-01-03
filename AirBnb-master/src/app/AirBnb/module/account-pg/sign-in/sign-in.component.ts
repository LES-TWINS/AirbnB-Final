import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signinForm!:FormGroup;
  submitted=false 
 

  constructor(private formBuilder:FormBuilder,private http:HttpClient) { }
 
  ngOnInit(): void {
    this.signinForm=this.formBuilder.group({
       firstName:['',[Validators.required,Validators.minLength(3)]],
       lastName:['',[Validators.required,Validators.minLength(3)]],
       Birthdate:['',Validators.required],
       Email:['',[Validators.required,Validators.email]]

    })
  }
 
  signIn(){
   this.submitted=true

   if(this.signinForm.invalid){
    return
   }
alert("we are good")

    this.http.post<any>("http://localhost:3000/signUp",this.signinForm.value)
    .subscribe(res=>{
      alert("sing up good")
      this.signinForm.reset()
      
      

    })
    
  }
}
