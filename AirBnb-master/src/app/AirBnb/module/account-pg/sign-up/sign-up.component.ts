import { HttpClient } from '@angular/common/http';
import { Component, OnInit,  } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

 signupForm!:FormGroup;
 submitted=false 


  constructor(private formBuilder:FormBuilder,private http:HttpClient) { }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
       firstName:['',[Validators.required,Validators.minLength(3)]],
       lastName:['',[Validators.required,Validators.minLength(3)]],
       Birthdate:['',Validators.required],
       Email:['',[Validators.required,Validators.email]]

    })
  }
 
  signUp(){
   this.submitted=true

   if(this.signupForm.invalid){
    return
   }
alert("we are good")

    this.http.post<any>("http://localhost:3000/signUp",this.signupForm.value)
    .subscribe(res=>{
      alert("sing up good")
      this.signupForm.reset()
      
      

    })
    
  }
}
