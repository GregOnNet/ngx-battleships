import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarbourComponent } from './harbour.component';

describe('HarbourComponent', () => {
  let component: HarbourComponent;
  let fixture: ComponentFixture<HarbourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarbourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarbourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
