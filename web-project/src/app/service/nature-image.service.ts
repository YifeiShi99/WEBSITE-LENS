import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { natureimages } from "../data/nature-image";

@Injectable({
  providedIn: 'root'
})
export class NatureImageService {

  constructor() { }
  fetchImages(): Observable<any> {
    return of(natureimages);
  }
}
