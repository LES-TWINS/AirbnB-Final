import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { HttpService } from 'src/app/AirBnb/services/http.service';
import { CardServiceService } from './card-service.service';

@Component({
  selector: 'app-filter-content-main',
  templateUrl: './filter-content-main.component.html',
  styleUrls: ['./filter-content-main.component.scss']
})
export class FilterContentMainComponent implements OnInit {

  numberArray:Number[] = [1,2,3,4,5,6,7,8]
  testing:any ='';
  bedrooms!:any;
  roomsCount!:any; 
  bedsCount!:any;
  bathCount!:any;
  property!:any;
  typeOfPlaces:any = [];
  amenities:any = [];
  hostLang:any = [];
  constructor(private http:HttpService,private cardService:CardServiceService) { }

  ngOnInit(): void {
   
  }
  filteredByCategory(data:NgForm){
 
    data.value.typeOfPlace = this.testing;
   data.value.bedrooms = this.roomsCount;
   data.value.beds = this.bedsCount;
   data.value.baths = this.bathCount;
   data.value.property = this.property;
   data.value.amenities = this.amenities;
   data.value.hostLanguage = this.hostLang

   
  //  console.log(data.value)
    this.http.getFilterByCategory('',
    data.value.price, 
    data.value.typeOfPlace,
    data.value.bedrooms,
    data.value.beds,
    data.value.baths,
    data.value.property,
    data.value.amenities,
    data.value.hostLanguage,
 
    ).subscribe((data:any)=>{
     this.cardService.cardService.next(data) 
   })
 

  }
  // getBedRoomsCount(event:Event){
  //   const nativeElement = (event.target as HTMLInputElement);
  //   this.bedrooms = nativeElement.value;
  //   console.log(this.bedrooms)
  // }
  test(event: Event){
    const nativeElement = (event.target as HTMLInputElement);
    this.testing = (nativeElement.value);


  if(nativeElement.checked){
    this.typeOfPlaces.push(this.testing);
  } else{
    this.typeOfPlaces.splice(this.typeOfPlaces.indexOf(this.testing),1)
  }
  }
  cont = new FormGroup({
    beth:new FormControl('')
 })


test1(event:Event){
const test=event.target as HTMLInputElement;
this.roomsCount = test.value


}

getBedsValue(event:Event){
  const test=event.target as HTMLInputElement;
  this.bedsCount = test.value;


  }
  getBathCount(event:Event){
    const test=event.target as HTMLInputElement;
    this.bathCount = test.value;

  }

  getPropertyVal(event:Event){
    const test=event.target as HTMLInputElement;
    this.property = test.value;
  }

  getAmenities(event:Event){
    const test=event.target as HTMLInputElement;
  
    if(test.checked){
      this.amenities.push(test.value);
    
    } else{
      this.amenities.splice(this.amenities.indexOf(this.amenities),1)
    }
  }

  getHostLang(event:Event){
    const test=event.target as HTMLInputElement;
  
    if(test.checked){
      this.hostLang.push(test.value);
    
    } else{
      this.hostLang.splice(this.hostLang.indexOf(this.hostLang),1)
    }
  }
  
}
