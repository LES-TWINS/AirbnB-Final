import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";


@Injectable({
    providedIn:"root"
})
export class MapService{

    location:Subject<any> = new Subject();

}