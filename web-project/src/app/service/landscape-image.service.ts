import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { landscapeimages } from "../data/landscape-image";
@Injectable({
  providedIn: 'root'
})
export class LandscapeImageService {

  constructor() { }
  fetchImages(): Observable<any> {
    return of(landscapeimages);
  }
}
