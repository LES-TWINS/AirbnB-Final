import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-ordered',
  templateUrl: './ordered.component.html',
  styleUrls: ['./ordered.component.scss']
})
export class OrderedComponent implements OnInit {
  addPhoneNumberForm!:FormGroup;
  submitted = false ;
  reservedHotel:any = [];

  constructor( private location: Location, 
    private formBuilder:FormBuilder,private http:HttpClient,
    private activatedRoute: ActivatedRoute ) { 
  }




  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((info) =>{
      this.reservedHotel = info
      console.log(this.reservedHotel)
    })
      // this.addPhoneNumberForm=this.formBuilder.group({
      //  Country:['',[Validators.required,Validators]],
      //  PhoneNumber:['',[Validators.required,Validators.minLength(9)]],

      // })
 }

//  addPhoneNumber(){
//   this.submitted=true

//   if(this.addPhoneNumberForm.invalid){
//    return
//   }
// alert("good")

//    this.http.post<any>("http://localhost:3000/ordered",this.addPhoneNumberForm.value)
//    .subscribe(res=>{
//      alert("add number good")
//      this.addPhoneNumberForm.reset()
     
     

//    })

  
// }
}