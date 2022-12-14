import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/AirBnb/services/http.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  hotelsArray:any = []

  constructor(private http:HttpService) { 
   this.http.getAllHotels().subscribe((hotels =>{
     this.hotelsArray = hotels;
     console.log(this.hotelsArray)
   }))
  }

  ngOnInit(): void {
  }

}
