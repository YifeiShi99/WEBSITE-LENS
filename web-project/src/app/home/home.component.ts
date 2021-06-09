import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';







@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  


  
  
  
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
