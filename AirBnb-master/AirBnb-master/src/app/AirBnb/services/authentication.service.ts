import { Injectable } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import{from, switchMap} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private auth:Auth) { }

login(username:string,Password:string){
 return from(signInWithEmailAndPassword(this.auth,username,Password))
}

signup(name:string,password:string,email:string){
  return from(createUserWithEmailAndPassword(this.auth,email,password)).pipe(
    switchMap(({user})=>updateProfile(user,{displayName:name}))
  )
 }

logout(){
  return from(this.auth.signOut())
}
}
