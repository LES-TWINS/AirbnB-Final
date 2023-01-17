import { Component, OnInit, ViewChild,  } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { FormGroup,FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/AirBnb/services/auth.service';
import { User } from 'src/app/AirBnb/shared-models/user.model';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  close:boolean = true
//  signupForm!:FormGroup;
  submitted=false 
//  Email!:string;
//  Password!:string


  constructor(private formBuilder:FormBuilder,
              private firebaseWorker:AuthService,
              private router:Router
    ) { }

  ngOnInit(): void {
    // this.signupForm=this.formBuilder.group({
    //   firstName:['',[Validators.required,Validators.minLength(5)]],
    //   Password:['',[Validators.required,Validators.minLength(6)]],
    //   Birthdate:['',Validators.required],
    //   Email:['',[Validators.required,Validators.email]]

    // })
  }
 



    onFormSubmit(form:NgForm){
      this.submitted=true
      var tmpUser =Object.assign(new User(),form.value);
      console.log(tmpUser)
     
       this.firebaseWorker.signUp(tmpUser,form.value.password).then((res:any) =>{
        this.router.navigate(['/'])
      
       })
       this.close =! this.close 
    }

    




}
