import {
  Component,
  OnInit
 } from '@angular/core';
 import { ActivatedRoute, Router} from '@angular/router';
 




@Component({
  selector: 'app-something',
  templateUrl: './something.component.html',
  styleUrls: ['./something.component.scss',]
})
export class SomethingComponent implements OnInit {
  

   
  
  constructor(private _router: Router) {
  }

  onSomehtingButtonClick(): void {
    this._router.navigate(['/naturehome']);
  }
  onSomehtingButtonClick2(): void {
    
  }
  onSomehtingButtonClick3(): void {
    
  }
  onSomehtingButtonClick4(): void {
    
  }
  onSomehtingButtonClick5(): void {
    
  }
  onSomehtingButtonClick6(): void {
    this._router.navigate(['/something']);
    
  }


  ngOnInit(): void {
    
  }

  

}