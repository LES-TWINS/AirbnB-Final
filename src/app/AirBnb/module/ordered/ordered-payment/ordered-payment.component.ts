import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ordered-payment',
  templateUrl: './ordered-payment.component.html',
  styleUrls: ['./ordered-payment.component.scss']
})
export class OrderedPaymentComponent implements OnInit {

  constructor(private actRoute:ActivatedRoute) { 

    this.actRoute.params.subscribe(data=>{
      console.log(data)
    })
  }

  ngOnInit(): void {
  }

}
