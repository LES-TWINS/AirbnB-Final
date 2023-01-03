import { Component, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { faStar,faHeart,faFile,faBed,faBedPulse } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from 'src/app/AirBnb/services/http.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit,OnDestroy {

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
  
  leftBottomSubscription!:Subscription 
  rightBottomSubscription!:Subscription

  selected ='option2';
  userCheckIn = '';
  userCheckOut = '';
  checkIn(checkInDate:any){
    this.date.setValue(checkInDate)
  }
  checkOut(checkOutDate:any){
    this.serializedDate.setValue(checkOutDate)
  }

  checkInTop(){
  this.leftBottomSubscription = this.date.valueChanges.subscribe((test:any) => {
      this.userCheckIn = test
     })

  }
  checkOutBottom(){
    this.rightBottomSubscription = this.serializedDate.valueChanges.subscribe((test:any) => {
      this.userCheckOut = test
     })
  }

  



  faStar = faStar;
  faHeart = faHeart;
  faFile = faFile;
  faBed = faBed;
  faBedPulse = faBedPulse

  public hotelId:string = '';
  public iconArray:any = [];
  
  singleHotel:any = [];
  userScroll:number = 0;
  userScrollMax:number = 0;
    
  constructor(private activatedRoute:ActivatedRoute,private http:HttpService) { }

  ngOnInit(): void {
   this.hotelId = this.activatedRoute.snapshot.params['id'];
   this.getOne(this.hotelId);
   this.http.getAllFilterIcons().subscribe(icon => {
    this.iconArray = icon
   })
    this.checkInTop()
    this.checkOutBottom()
  }

  getOne(id:string){
     this.http.getOne(id).subscribe(data =>{
      this.singleHotel = data;
      console.log(this.singleHotel)
    })
  }

  @HostListener("window:scroll", ["$event"])
onWindowScroll() {

let pos = document.documentElement.scrollTop;
let max = document.documentElement.scrollHeight;

 if(pos > (max / 4.3) ) {
   this.userScroll = pos;
 } 
 if(pos < (max / 4.3)){
   this.userScroll = 0;
 }

}


ngOnDestroy(): void {
  this.leftBottomSubscription.unsubscribe();
  this.rightBottomSubscription.unsubscribe();
}


}



