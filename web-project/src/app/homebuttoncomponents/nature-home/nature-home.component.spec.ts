import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatureHomeComponent } from './nature-home.component';

describe('NatureHomeComponent', () => {
  let component: NatureHomeComponent;
  let fixture: ComponentFixture<NatureHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatureHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatureHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
