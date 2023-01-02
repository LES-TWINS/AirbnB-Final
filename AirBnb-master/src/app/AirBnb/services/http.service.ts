import { HttpClient } from '@angular/common/http';
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
}
