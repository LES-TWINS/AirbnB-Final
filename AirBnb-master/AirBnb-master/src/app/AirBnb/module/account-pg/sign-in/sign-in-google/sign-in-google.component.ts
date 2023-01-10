import { Component, OnInit } from '@angular/core';
// import { AuthService } from 'src/app/AirBnb/services/auth.service';

@Component({
  selector: 'app-sign-in-google',
  templateUrl: './sign-in-google.component.html',
  styleUrls: ['./sign-in-google.component.scss']
})
export class SignInGoogleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  signingoogle(){
    // this.auth.signInGoogle()
  }
}
