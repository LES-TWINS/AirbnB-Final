import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

 
  api:String =`http://airbnb-dev.us-east-1.elasticbeanstalk.com/api/Hotel`
  constructor(private http:HttpClient) { }
  getAllHotels(){
    return this.http.get('http://airbnb-dev.us-east-1.elasticbeanstalk.com/api/Hotel');
  }
  getAllFilterIcons(){
    return this.http.get('http://airbnb-dev.us-east-1.elasticbeanstalk.com/api/Category');
  }

  getOne(id:string){
    return this.http.get('http://airbnb-dev.us-east-1.elasticbeanstalk.com/api/Hotel/' + id);
  }

  getFilterByCategory(id?: string,price?:any, typeOfPlace?:any, bedrooms?:any){
    const _id = id || null;
    const _price = price || null;
    const _typeOfPlace = typeOfPlace || null;
    let querys:any = '';
    let formstr:any = '';
    let param = "";
if (id) {
  formstr += 'ID='+ id; 
}
if (price && price.minPrice != '') {
    formstr += 'PriceFrom='+ price.minPrice + '&'; 

     
}
if (price && price.maxPrice != '') {
  formstr += 'PriceTo='+ price.maxPrice + '&'; 
 
}
if (typeOfPlace != undefined && typeOfPlace.length >= 0) {
   formstr += 'TypeOfPlace='+ typeOfPlace; 
}
// if(bedrooms){
//   formstr += 'BedsPerRoomCount='+ bedrooms + '&'; 
// }
  
    querys  = new HttpParams({fromString: formstr});
    return this.http.get(`http://airbnb-dev.us-east-1.elasticbeanstalk.com/api/Hotel/filter-by-category?${querys}`);
  }


  // getFilterByCategory(id:string){
  //   return this.http.get('http://airbnb-dev.us-east-1.elasticbeanstalk.com/api/Hotel/filter-by-category?ID=' + id);
  // }
  getAllAmenities(){
    return this.http.get('http://airbnb-dev.us-east-1.elasticbeanstalk.com/api/Category/get-all-menities');
  }
  getByCategory(id:string){
   return id
  }
}
