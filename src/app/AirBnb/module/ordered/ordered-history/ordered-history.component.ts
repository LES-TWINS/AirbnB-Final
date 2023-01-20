import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ordered-history',
  templateUrl: './ordered-history.component.html',
  styleUrls: ['./ordered-history.component.scss']
})
export class OrderedHistoryComponent implements OnInit {

  reservedHotel:any;


  constructor(private actRoute:ActivatedRoute) { 

    this.actRoute.queryParams.subscribe((data:any)=>{
      console.log(data)
      this.reservedHotel = data
    })

  }

  ngOnInit(): void {
  }

}
