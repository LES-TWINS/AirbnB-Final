import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/AirBnb/services/auth.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  submitted=false ;


  constructor(private formBuilder:FormBuilder,private firebaseWorker:AuthService) { }
 
  ngOnInit(): void {

  }
 

  
onFormSubmit(form:NgForm){
  this.submitted=true
  this.firebaseWorker.signIn(form.value.email,form.value.password).then(res =>{
   res.subscribe((user:any) =>{
    console.log(user)
    
   })
  })
}

}