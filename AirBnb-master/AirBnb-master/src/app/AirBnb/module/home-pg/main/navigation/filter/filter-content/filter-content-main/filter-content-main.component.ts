import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/AirBnb/services/http.service';

@Component({
  selector: 'app-filter-content-main',
  templateUrl: './filter-content-main.component.html',
  styleUrls: ['./filter-content-main.component.scss']
})
export class FilterContentMainComponent implements OnInit {

  public amenities:any = []

  constructor(private http:HttpService) { }

  ngOnInit(): void {
    this.http.getAllAmenities().subscribe((amenities) =>{
     this.amenities = amenities;
     console.log(this.amenities)
    })
  }

}
