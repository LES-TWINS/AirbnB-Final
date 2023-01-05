import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  faStar,
  faHeart,
  faFile,
  faBed,
  faBedPulse,
  faChain,
  faChainBroken
} from '@fortawesome/free-solid-svg-icons';
import { HttpService } from 'src/app/AirBnb/services/http.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy {
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
  both = new FormControl(new Date());

  leftBottomSubscription!: Subscription;
  rightBottomSubscription!: Subscription;

  // public minDate:any = 5
  public inDay: number = 0;
  public inMonth: number = 0;
  public checkInMonth!:any
  public inYear: number = 0;
  public outDay: number = 0;
  public outMonth: number = 0;
  public checkOutMonth!:any;
  public outYear: number = 0;
  public oneNightPrice: number = 1;
  public daysCount:number = 1;
  public totalPrice: number = 1;
  public differenceInTime!:any;
  public differenceInDays!:any;

  minDate = new Date();
  checkOutMinDate!:Date;

  userCheckIn = '';
  userCheckOut = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpService
  ) {}

  ngOnInit(): void {
    this.hotelId = this.activatedRoute.snapshot.params['id'];
    this.getOne(this.hotelId);
    this.checkInTop();
    this.checkOutBottom();

  }

  checkIn(checkInDate: any) {
    this.date.setValue(checkInDate);
  }
  checkOut(checkOutDate: any) {
    this.serializedDate.setValue(checkOutDate);
  }

  checkInTop() {
    this.leftBottomSubscription = this.date.valueChanges.subscribe(
      (dateInfo: any) => {
        while(isNaN(this.differenceInDays) || this.differenceInDays < 0){
          this.differenceInDays = 0;
          this.totalPrice = 0;
        }
        this.userCheckIn = dateInfo;
        this.inDay = dateInfo.getDate();
        this.inMonth = dateInfo.getMonth();
        this.inYear = dateInfo.getFullYear();
        this.checkInMonth = new Date(this.inYear, this.inMonth, this.inDay);
        this.differenceInTime = this.checkOutMonth - this.checkInMonth;
        this.differenceInDays = this.differenceInTime / (1000 * 3600 * 24);
        this.totalPrice = this.oneNightPrice * this.differenceInDays;
        this.checkOutMinDate = new Date(this.inYear,this.inMonth,this.inDay + 1)
      }
    );
  }



  checkOutBottom() {
    this.rightBottomSubscription = this.serializedDate.valueChanges.subscribe(
      (dateInfo: any) => {
        while(isNaN(this.differenceInDays) || this.differenceInDays < 0){
          this.differenceInDays = 0;
          this.totalPrice = 0
        
     }
        this.userCheckOut = dateInfo;
        this.outDay = dateInfo.getDate();
        this.outMonth = dateInfo.getMonth() ;
        this.outYear = dateInfo.getFullYear();
        this.checkOutMonth =  new Date(this.outYear, this.outMonth, this.outDay);
        this.differenceInTime = this.checkOutMonth - this.checkInMonth;
        this.differenceInDays = this.differenceInTime / (1000 * 3600 * 24);
        this.totalPrice = this.oneNightPrice * this.differenceInDays;
       
        
      }
    );
  }


  
  faStar = faStar;
  faHeart = faHeart;
  faFile = faFile;
  faBed = faBed;
  faBedPulse = faBedPulse;
  faChainBroken = faChainBroken;

  public hotelId: string = '';
  public iconArray: any = [];

  singleHotel: any = [];
  userScroll: number = 0;
  userScrollMax: number = 0;

  getOne(id: string) {
    this.http.getOne(id).subscribe((data) => {
      this.singleHotel = data;
      this.oneNightPrice = this.singleHotel.rooms[0].price;
      this.totalPrice = this.oneNightPrice;
      console.log(this.singleHotel);
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let pos = document.documentElement.scrollTop;
    let max = document.documentElement.scrollHeight;

    if (pos > max / 5) {
      this.userScroll = pos;
    }
    if (pos < max / 5) {
      this.userScroll = 0;
    }
  }

  ngOnDestroy(): void {
    this.leftBottomSubscription.unsubscribe();
    this.rightBottomSubscription.unsubscribe();
  }
}
