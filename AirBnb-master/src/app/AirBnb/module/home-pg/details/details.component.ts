import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faStar,faHeart,faFile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  faStar = faStar;
  faHeart = faHeart;
  faFile = faFile;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   console.log(this.activatedRoute.snapshot.params) 
  }

}
