import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HttpService } from 'src/app/AirBnb/services/http.service';
import { MainService } from '../main.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  hotelsArray: any = [];
  activatedRoute: any;
 

  constructor(private router:Router, private http: HttpService,private mainService:MainService) {


    this.http.getAllHotels().subscribe(((hotels: any) => {
      this.hotelsArray = hotels;
      this.hotelsArray.forEach((hotel: any) => {
        hotel.mainImages = hotel.mainImages.map((item: any, index: number) => {
          return {
            src: item,
            isActive: index == 0
          }
        })
      });
      console.log(this.hotelsArray);
     
    }))
  }

  ngOnInit(): void {
    //  this.mainService.cardFilter.subscribe((data)=>{
    //   this.hotelsArray = this.hotelsArray.filter((hotel:any)=>{
    //        return hotel.categories.forEach((singleHotel:any)=>{
    //             // return data == singleHotel.id
    //             console.log(data,singleHotel.id);
    //         })
    //    })
     
    //   console.log(this.hotelsArray);
    //  })
  }


  prev(hotel: any) {
    var index = hotel.mainImages.findIndex((item: any) => item.isActive == true);
    hotel.mainImages[index].isActive = false;
    if (index == 0) {
      hotel.mainImages[3].isActive = true;
    } else {
      hotel.mainImages[index - 1].isActive = true;
 
    }
  }

  next(hotel: any) {
    var index = hotel.mainImages.findIndex((item: any) => item.isActive);
    hotel.mainImages[index].isActive = false;
    if (index == 3) {
      hotel.mainImages[0].isActive = true;
    } else {
      hotel.mainImages[index + 1].isActive = true;

    }
  }

}
