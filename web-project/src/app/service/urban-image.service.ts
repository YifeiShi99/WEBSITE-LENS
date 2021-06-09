import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { urbanimages } from "../data/urban-image";

@Injectable({
  providedIn: 'root'
})
export class UrbanImageService {

  constructor() { }
  fetchImages(): Observable<any> {
    return of(urbanimages);
  }
}
