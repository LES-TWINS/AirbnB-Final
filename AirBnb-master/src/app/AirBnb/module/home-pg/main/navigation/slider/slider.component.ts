
import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpService } from 'src/app/AirBnb/services/http.service';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  
  iconsArray:any=[]

  constructor(private http:HttpService) {
    this.http.getAllFilterIcons().subscribe((icons)=>{
      this.iconsArray = icons;
      console.log(this.iconsArray)
    })
   }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 1600,
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
}

