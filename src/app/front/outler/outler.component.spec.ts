import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlerComponent } from './outler.component';

describe('OutlerComponent', () => {
  let component: OutlerComponent;
  let fixture: ComponentFixture<OutlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
