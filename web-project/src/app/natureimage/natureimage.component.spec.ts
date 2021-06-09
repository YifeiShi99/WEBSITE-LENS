import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatureimageComponent } from './natureimage.component';

describe('NatureimageComponent', () => {
  let component: NatureimageComponent;
  let fixture: ComponentFixture<NatureimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatureimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatureimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
