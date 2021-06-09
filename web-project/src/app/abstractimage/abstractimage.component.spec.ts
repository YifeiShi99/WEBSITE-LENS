import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractimageComponent } from './abstractimage.component';

describe('AbstractimageComponent', () => {
  let component: AbstractimageComponent;
  let fixture: ComponentFixture<AbstractimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbstractimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
