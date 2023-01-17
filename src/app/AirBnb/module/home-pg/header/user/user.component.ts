import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  show=false;
images: any;
  
toggleLogin(){
    
  this.show=!this.show
}
clickedOutside():void{
  this.show=false
}
forSignUp(){
  
}
}
