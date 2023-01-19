import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../account-pg/sign-in/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userPage:boolean = false;


  constructor(private userService:UserService) { 

    this.userService.userService.subscribe(data=>{
    this.userPage = true;
    })

  }

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

}
