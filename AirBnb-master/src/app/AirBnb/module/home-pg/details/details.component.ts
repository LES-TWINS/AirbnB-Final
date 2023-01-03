import { Component, HostListener,  OnDestroy, OnInit, } from '@angular/core';
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
export class DetailsComponent implements OnInit,OnDestroy{



  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
  
  leftBottomSubscription!:Subscription; 
  rightBottomSubscription!:Subscription;

  public inDay:number = 0;
  public inMonth:number = 0;
  public inYear:number = 0;
  public outDay:number = 0;
  public outMonth:number = 0;
  public outYear:number = 0;
  public oneNightPrice:number = 0;
  public totalPrice:number = 0;

 


  userCheckIn = '';
  userCheckOut = '';



  checkIn(checkInDate:any){
    this.date.setValue(checkInDate);
    this.inDay = checkInDate.getDate();
    this.inMonth = checkInDate.getMonth();
    this.inYear = checkInDate.getFullYear();
 
    
  }
  checkOut(checkOutDate:any){
    this.serializedDate.setValue(checkOutDate);
    this.outDay = checkOutDate.getDate();
    this.outMonth = checkOutDate.getMonth();
    this.outYear = checkOutDate.getFullYear();

  }

  checkInTop(){
  this.leftBottomSubscription = this.date.valueChanges.subscribe((dateInfo:any) => {
      this.userCheckIn = dateInfo;
      this.inDay = dateInfo.getDate();
      this.inMonth = dateInfo.getMonth();
      this.inYear = dateInfo.getFullYear();
     })

  }
  checkOutBottom(){
    this.rightBottomSubscription = this.serializedDate.valueChanges.subscribe((dateInfo:any) => {
      this.userCheckOut = dateInfo;
      this.outDay = dateInfo.getDate();
      this.outMonth = dateInfo.getMonth();
      this.outYear = dateInfo.getFullYear();
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
    this.checkInTop();
    this.checkOutBottom();
  
  
  }

  getOne(id:string){
     this.http.getOne(id).subscribe(data =>{
      this.singleHotel = data;
      this.oneNightPrice = this.singleHotel.rooms[0].price;
      this.totalPrice = this.oneNightPrice;
      console.log(this.singleHotel);
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



