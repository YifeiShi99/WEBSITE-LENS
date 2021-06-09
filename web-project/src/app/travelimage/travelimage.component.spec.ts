import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelimageComponent } from './travelimage.component';

describe('TravelimageComponent', () => {
  let component: TravelimageComponent;
  let fixture: ComponentFixture<TravelimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
