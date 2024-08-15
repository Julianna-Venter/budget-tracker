import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitOrdersComponent } from './debit-orders.component';

describe('DebitOrdersComponent', () => {
  let component: DebitOrdersComponent;
  let fixture: ComponentFixture<DebitOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebitOrdersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebitOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
