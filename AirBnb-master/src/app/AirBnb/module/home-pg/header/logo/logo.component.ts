import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/AirBnb/services/http.service';
import { MainService } from '../../main/main.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  constructor(private mainService:MainService,private http: HttpService,private router:Router) { }

  ngOnInit(): void {
  }

  getAllData(){
    this.http.getAllHotels().subscribe(((hotels: any) => {
      this.mainService.cardFilter.next(hotels);
      this.router.navigate(['/']);
    }))
  }

}
