import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { User } from '../shared-models/user.model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;

  constructor(public firestore: AngularFirestore,
  public auth: AngularFireAuth,) {}

  signUp(user:User,password:string):any {
    return this.auth
      .createUserWithEmailAndPassword(user.email, password)
      .then((result) => {
        console.log(result)
     
        this.sendVerificationMail();
        this.setUserData(result.user,user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  signIn(email: string, password: string) {
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
      
        console.log(result)
        this.auth.authState.subscribe((user) => {
          if (user) {
            console.log(user)
          }
        });

        return  this.getUserDoc(result.user?.uid ?? "")
     
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  sendVerificationMail() {
    // return this.auth.currentUser
    //   .then((u: any) => u.sendEmailVerification())
    //   .then(() => {
    //     this.router.navigate(['verify-email-address']);
    //   });
  }
  getUserDoc(id:string):any {
    return this.firestore
      .collection('users')
      .doc(id)
      .valueChanges();
  }

  setUserData(fireUser: any,user:User) {
    console.log(user)
    const userRef: AngularFirestoreDocument<any> = this.firestore.doc(
      `users/${fireUser.uid}`
    );
    const userData: User = {
      id: fireUser.uid,
      userName:user.userName,
      email: user.email,

    } as User;
    return userRef.set(userData, {
      merge: true,
    });
  }





}
