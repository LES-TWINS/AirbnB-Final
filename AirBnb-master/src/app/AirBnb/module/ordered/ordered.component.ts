import { Component, HostListener, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { faArrowLeft, faStar} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-ordered',
  templateUrl: './ordered.component.html',
  styleUrls: ['./ordered.component.scss']
})
export class OrderedComponent implements OnInit {
   addPhoneNumberForm!:FormGroup;
  submitted = true;
  reservedHotel:any = [];
  faArrowLeft = faArrowLeft;
  faStar = faStar;
  userScroll: number = 0;
  userScrollMax: number = 0;
  phoneNumber:any = 'Add and confirm your phone number to get trip updates.';
  // test!:FormControl;

  constructor(private formBuilder:FormBuilder,private http:HttpClient,
    private activatedRoute: ActivatedRoute ) { 
  }




  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((info) =>{
      this.reservedHotel = info
      console.log(this.reservedHotel);
     
    })

    this.addPhoneNumberForm=this.formBuilder.group({
      Number:['',[Validators.required,Validators.minLength(9)]],
    })
  }

  addPhoneNumber(mobileNumber:any){
   this.phoneNumber = mobileNumber.form.controls.phoneNumber.value
   this.submitted = !this.submitted;
  }

  
@HostListener('window:scroll', ['$event'])
onWindowScroll() {
  let pos = document.documentElement.scrollTop;
  let max = document.documentElement.scrollHeight;

  if (pos > max / 50) {
    this.userScroll = pos;
  }
  if (pos < max / 50) {
    this.userScroll = 0;
  }
}

}