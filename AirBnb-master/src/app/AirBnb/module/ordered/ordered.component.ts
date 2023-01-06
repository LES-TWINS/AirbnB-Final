import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-ordered',
  templateUrl: './ordered.component.html',
  styleUrls: ['./ordered.component.scss']
})
export class OrderedComponent implements OnInit {
  addPhoneNumberForm!:FormGroup;
  submitted=false 

  constructor( private location: Location, 
    private formBuilder:FormBuilder,private http:HttpClient ) { 
  }

  goBack() {
    this.location.back();
  }


  ngOnInit(): void {
      this.addPhoneNumberForm=this.formBuilder.group({
       Country:['',[Validators.required,Validators]],
       PhoneNumber:['',[Validators.required,Validators.minLength(9)]],

      })
 }

 addPhoneNumber(){
  this.submitted=true

  if(this.addPhoneNumberForm.invalid){
   return
  }
alert("good")

   this.http.post<any>("http://localhost:3000/ordered",this.addPhoneNumberForm.value)
   .subscribe(res=>{
     alert("add number good")
     this.addPhoneNumberForm.reset()
     
     

   })

  
}
}