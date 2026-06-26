import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraderRegistration } from './trader-registration';

describe('TraderRegistration', () => {
  let component: TraderRegistration;
  let fixture: ComponentFixture<TraderRegistration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraderRegistration],
    }).compileComponents();

    fixture = TestBed.createComponent(TraderRegistration);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
