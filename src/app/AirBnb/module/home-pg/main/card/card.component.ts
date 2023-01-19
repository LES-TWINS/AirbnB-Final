import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/AirBnb/services/http.service';
import { MapService } from '../../details/map.service';
import { MainService } from '../main.service';
import { CardServiceService } from '../navigation/filter/filter-content/filter-content-main/card-service.service';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit,OnDestroy {

  hotelsArray: any = [];
  activatedRoute: any;
  cardFilter!:Subscription


  constructor(private router:Router, private http: HttpService,
    private mapService:MapService,
    private mainService:MainService,
    private cardService:CardServiceService) {
    this.http.getAllHotels().subscribe(((hotels: any) => {
      this.hotelsArray = hotels;
      console.log(this.hotelsArray)
      this.mapMainImages(this.hotelsArray);
    }))
    // this.http.getFilterByCategory().subscribe((data) =>{
    //   console.log(data)
    // })

  }

  mapMainImages(hotelsArray:any[]){
    this.hotelsArray.forEach((hotel: any) => {
      hotel.mainImages = hotel.mainImages.map((item: any, index: number) => {
        return {
          src: item,
          isActive: index == 0
        }
      })
    });
  }


  ngOnInit(): void {
   this.cardFilter = this.mainService.cardFilter.subscribe((data)=>{
       this.hotelsArray = data;
       this.mapMainImages(this.hotelsArray);
     })
     this.cardService.cardService.subscribe((data)=>{
      this.hotelsArray = data;
      this,this.mapMainImages(this.hotelsArray)
      console.log(data)
     })
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
  ngOnDestroy(): void {
    this.cardFilter.unsubscribe();
  }
}
