import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from 'src/app/AirBnb/services/http.service';

@Component({
  selector: 'app-filter-content-main',
  templateUrl: './filter-content-main.component.html',
  styleUrls: ['./filter-content-main.component.scss']
})
export class FilterContentMainComponent implements OnInit {

  numberArray:Number[] = [1,2,3,4,5,6,7,8]
  testing:any =''

  constructor(private http:HttpService) { }

  ngOnInit(): void {
   
  }
  filteredByCategory(data:NgForm){
   
    data.value.typeOfPlace = this.testing;
    console.log(data.value);
  }
  test(event: Event){
  this.testing = ((event.target as HTMLInputElement).value)
  }
}
