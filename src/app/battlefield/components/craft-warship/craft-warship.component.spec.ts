import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftWarshipComponent } from './craft-warship.component';

describe('CraftWarshipComponent', () => {
  let component: CraftWarshipComponent;
  let fixture: ComponentFixture<CraftWarshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraftWarshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftWarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
