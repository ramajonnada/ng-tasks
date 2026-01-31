import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSignals } from './ng-signals';

describe('NgSignals', () => {
  let component: NgSignals;
  let fixture: ComponentFixture<NgSignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgSignals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgSignals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
