import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;

  constructor(private fireauth:AngularFireAuth) { }


  // logIn(Email:string,Password:string){
  //   this.fireauth.signInWithEmailAndPassword(Email,Password).then(()=>{
  //     localStorage.setItem('token','true')
  //   },err=>{
  //     alert('something went wrong')
  //   })
  // }

  // signUp(Email:string,Password:string){
  //   this.fireauth.createUserWithEmailAndPassword(Email,Password).then(()=>{
  //     alert("sucsses")
    
  //   },err=>{
  //     alert(err.message)
  //   })

  // }




}
