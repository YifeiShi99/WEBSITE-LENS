import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { abstractimages } from "../data/abstract-image";

@Injectable({
  providedIn: 'root'
})
export class AbstractImageService {

  constructor() { }
  fetchImages(): Observable<any> {
    return of(abstractimages);
  }
}
