import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  getAllHotels(){
    return this.http.get('http://airbnb-dev.us-east-1.elasticbeanstalk.com/api/Hotel');
    
  }
  getAllFilterIcons(){
    return this.http.get('http://airbnb-dev.us-east-1.elasticbeanstalk.com/api/Category');
  }
}
