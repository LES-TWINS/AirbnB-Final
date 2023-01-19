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
  bedrooms!:any 
  typeOfPlaces:any = [];
  constructor(private http:HttpService,private cardService:CardServiceService) { }

  ngOnInit(): void {
   
  }
  filteredByCategory(data:NgForm){
 
    data.value.typeOfPlace = this.testing;
   data.value.bedrooms = this.bedrooms;
   console.log(data.value)
    this.http.getFilterByCategory('',data.value.price, data.value.typeOfPlace,data.value.bedrooms).subscribe((data:any)=>{
     this.cardService.cardService.next(data) 
   })
 

  }
  getBedRoomsCount(event:Event){
    const nativeElement = (event.target as HTMLInputElement);
    this.bedrooms = nativeElement.value;
    console.log(this.bedrooms)
  }
  test(event: Event){
    const nativeElement = (event.target as HTMLInputElement);
    this.testing = (nativeElement.value);
    console.log(this.testing)

  if(nativeElement.checked){
    this.typeOfPlaces.push(this.testing);
  } else{
    this.typeOfPlaces.splice(this.typeOfPlaces.indexOf(this.testing),1)
  }
  }
  cont = new FormGroup({
    beth:new FormControl('')
 })

//  setval(para:any){
//   this.cont.patchValue({
//    beth:para
//   })
//   console.log(this.cont.value);
// }
}
