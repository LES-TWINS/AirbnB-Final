import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { faStar,faHeart,faFile,faBed,faBedPulse } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from 'src/app/AirBnb/services/http.service';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
  selected = 'option2';

  faStar = faStar;
  faHeart = faHeart;
  faFile = faFile;
  faBed = faBed;
  faBedPulse = faBedPulse

  public hotelId:string = '';
  
  singleHotel:any = [];
  userScroll:number = 0;
  userScrollMax:number = 0;
    
  constructor(private activatedRoute:ActivatedRoute,private http:HttpService) { }

  ngOnInit(): void {
   this.hotelId = this.activatedRoute.snapshot.params['id'];
   this.getOne(this.hotelId);

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

 if(pos > (max / 4) )   {
   this.userScroll = pos
 } 
 if(pos < (max / 4)){
   this.userScroll = 0
 }

}

}
