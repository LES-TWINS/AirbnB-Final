import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/AirBnb/services/http.service';

@Component({
  selector: 'app-filter-content-main',
  templateUrl: './filter-content-main.component.html',
  styleUrls: ['./filter-content-main.component.scss']
})
export class FilterContentMainComponent implements OnInit {

  numberArray:Number[] = [1,2,3,4,5,6,7,8]
  testing:any = [];
  roomsAndBedrooms:any = [];
  some:any;
  te:any
  typeOfPlace = {
    type:'',
    type1:'',
    type2:''

  }


  constructor(private http:HttpService,private router:Router) { }

  ngOnInit(): void {
  }
  
  filteredByCategory(data:NgForm){
    data.value.typeOfPlace = this.testing
    data.value.roomsAndBeds = this.roomsAndBedrooms;
    console.log(data.value);
    this.some = data.value;

  }

  getCheckboxValue(event:any,arrayQue:any){
    const arrayName = arrayQue === 0 ?  this.testing : arrayQue === 1 ? this.testing : this.testing
    if((event.target as HTMLInputElement).checked){
      if(arrayName.length === 0){
       arrayName.push((event.target as HTMLInputElement).value);
      }
          if(!arrayName.includes((event.target as HTMLInputElement).value)) {
           arrayName.push((event.target as HTMLInputElement).value);
          }
     }
     else{
      arrayName.splice(arrayName.indexOf((event.target as HTMLInputElement).value),1);
     }
      console.log(this.testing)
  }

  test(event: Event){
    this.getCheckboxValue(event,0)
    
  }
  test1(event: Event){
    this.getCheckboxValue(event,1)
  }
  roomsAndBeds(event: Event){
    this.roomsAndBedrooms.push ((event.target as HTMLInputElement).value)
  }
  filter(){
    // this.te = this.some
    //  this.router.navigate(
    //    ['/'],
    //    { queryParams:
    //    { price:this.some.price.minPrice}
       
    //   }
    //  )
  }
}
