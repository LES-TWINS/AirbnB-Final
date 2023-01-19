import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public userInfo:any


  constructor(private router:ActivatedRoute) { 
  this.router.queryParams.subscribe((data:any)=>{
    this.userInfo = data;
    console.log(data)
  })


  }

  ngOnInit(): void {
  }

}
