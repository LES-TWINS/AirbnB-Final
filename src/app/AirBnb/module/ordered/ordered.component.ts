import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowLeft, faStar} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-ordered',
  templateUrl: './ordered.component.html',
  styleUrls: ['./ordered.component.scss'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class OrderedComponent implements OnInit {
   addPhoneNumberForm!:FormGroup;
  submitted:boolean = false;
  reservedHotel:any = [];
  faArrowLeft = faArrowLeft;
  faStar = faStar;
  userScroll: number = 0;
  userScrollMax: number = 0;
  phoneNumber:any = 'Add and confirm your phone number to get trip updates.';
 
  
  // test!:FormControl;
  @ViewChild('saveBtn') saveBtn!:ElementRef<any>
  constructor(private formBuilder:FormBuilder,private http:HttpClient,
    private activatedRoute: ActivatedRoute,public det:ChangeDetectorRef,
    private router:Router
    ) { 
  }


  onBtnClick(){

  // this.router.navigate(
  //   ['/ordered-payment'],
  //   {queryParams: { 
  //     price:this.reservedHotel.rooms[0].price,
  //     night:this.reservedHotel,
  //     total:this.reservedHotel,
  //     img:this.reservedHotel.rooms[0].images[0],
  //     name:this.reservedHotel.name,
  //     type:this.reservedHotel.typeOfPlace,
  //     inMonth:this.reservedHotel,
  //     inDay:this.reservedHotel,
  //     outMonth:this.reservedHotel,
  //     outDay:this.reservedHotel,
  //     guests:this.reservedHotel.rooms[0].personsCount,
  //     id:this.reservedHotel.id}
  //   }
  // )
 
  this.router.navigate(
    ['/ordered-payment'],
    { queryParams: { 

      price:this.reservedHotel.img,


     } }
  );


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
  
   setTimeout(()=>{
    this.saveBtn.nativeElement.setAttribute('data-bs-dismiss','modal');
    this.det.detectChanges();
   },300)
    this.det.detectChanges();
   
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