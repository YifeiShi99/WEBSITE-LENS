import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrbanimageComponent } from './urbanimage.component';

describe('UrbanimageComponent', () => {
  let component: UrbanimageComponent;
  let fixture: ComponentFixture<UrbanimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrbanimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrbanimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
