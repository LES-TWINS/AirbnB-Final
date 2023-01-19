import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/AirBnb/services/auth.service';
import { UserService } from './user.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  submitted=false ;
  user:any;

  constructor(private formBuilder:FormBuilder,
    private firebaseWorker:AuthService,
    private userService:UserService,
    private router:Router
    ) { }
 
  ngOnInit(): void {

  }
 
  onBtnClick(){
    
  }
  
onFormSubmit(form:NgForm){
  this.submitted=true
  this.firebaseWorker.signIn(form.value.email,form.value.password).then(res =>{
   res.subscribe((user:any) =>{

    this.userService.userService.next(user)
     this.user = user
     this.router.navigate(
      ['/profile'],
      { queryParams: { id: user.id,firstName:user.userName,email:user.email } }
    );
   })
  })
}

}