import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ordered-payment',
  templateUrl: './ordered-payment.component.html',
  styleUrls: ['./ordered-payment.component.scss']
})
export class OrderedPaymentComponent implements OnInit {

 
  reservedHotel:any;



  constructor(private actRoute:ActivatedRoute,private router:Router) { 

    this.actRoute.queryParams.subscribe(data=>{
      this.reservedHotel = data
        console.log(data)
    })
  }
  onBtnClick(){
     this.router.navigate(
      ['./ordered-history'],
      {queryParams: {
        price:this.reservedHotel.price,
        img:this.reservedHotel.img,
        id:this.reservedHotel.id,
        name:this.reservedHotel.name,
        inMonth:this.reservedHotel.inMonth,
        inDay:this.reservedHotel.inDay,
        outMonth:this.reservedHotel.outMonth,
        outDay:this.reservedHotel.outDay,
         
      }}
     )
  }

  ngOnInit(): void {
  }

}
