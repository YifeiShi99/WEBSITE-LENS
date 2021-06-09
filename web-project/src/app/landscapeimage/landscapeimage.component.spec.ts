import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandscapeimageComponent } from './landscapeimage.component';

describe('LandscapeimageComponent', () => {
  let component: LandscapeimageComponent;
  let fixture: ComponentFixture<LandscapeimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandscapeimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandscapeimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
