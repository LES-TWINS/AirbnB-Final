import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";


@Injectable({
    providedIn:"root"
})
export class MainService{

    cardFilter:Subject<any> = new Subject();


}