
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/AirBnb/services/http.service';
import { MainService } from '../../main.service';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit,OnDestroy {
  
  iconsArray:any=[];
  filteredIcon:any = [];
  iconSub!: Subscription;
  

  constructor(private http:HttpService,private activatedRoute: ActivatedRoute,private mainService:MainService) {
     this.http.getAllFilterIcons().subscribe((icons)=>{
      this.iconsArray = icons;
     // console.log(this.iconsArray)

      this.iconSub = this.activatedRoute.queryParams.subscribe((data) =>{
      this.filteredIcon = data;
      })
    })
   }


   ngOnInit(): void {
   
   }
   getByCategory(id:string){
    
    this.http.getFilterByCategory(id).subscribe((data)=>{
      this.mainService.cardFilter.next(data)
    })
   }
  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 1400,
    navText: ['<img src="assets/images/arrow.png" class="arrow">', '<img src="assets/images/arrow.png" class="arrow arrowR">'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 10
      },
      1300: {
        items: 14
      },  1600: {
        items: 17
      }
    },

    nav: true
  }

  ngOnDestroy(): void {
 this.iconSub.unsubscribe();
  }
}

