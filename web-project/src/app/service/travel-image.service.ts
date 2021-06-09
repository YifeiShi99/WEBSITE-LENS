import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { travelimages } from "../data/travel-image";


@Injectable({
  providedIn: 'root'
})
export class TravelImageService {

  constructor() { }
  fetchImages(): Observable<any> {
    return of(travelimages);
  }
}
