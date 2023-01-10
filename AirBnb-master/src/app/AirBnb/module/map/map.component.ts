import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  lat = 22.4064172;
  long = 69.0750171;
  zoom = 2;
  markers = [
    {
      lat: 21.1594627,
      lng: 72.6822083,
      label: 'Surat'
    },
    {
      lat: 23.0204978,
      lng: 72.4396548,
      label: 'Ahmedabad'
    },
    {
      lat: 22.2736308,
      lng: 70.7512555,
      label: 'Rajkot'
    }
  ];
  
}
