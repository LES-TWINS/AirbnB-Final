import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faStar,faHeart,faFile } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from 'src/app/AirBnb/services/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  faStar = faStar;
  faHeart = faHeart;
  faFile = faFile;

  public hotelId:string = '';
  
  singleHotel:any = [];
    
  constructor(private activatedRoute:ActivatedRoute,private http:HttpService) { }

  ngOnInit(): void {
   this.hotelId = this.activatedRoute.snapshot.params['id'];
   this.getOne(this.hotelId)
  }

  getOne(id:string){
     this.http.getOne(id).subscribe(data =>{
      this.singleHotel = data;
      console.log(this.singleHotel)
    })
  }

}
