import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  cardService:Subject<any> = new Subject();
}
