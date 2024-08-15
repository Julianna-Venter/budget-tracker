import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryDeductionsComponent } from './salary-deductions.component';

describe('SalaryDeductionsComponent', () => {
  let component: SalaryDeductionsComponent;
  let fixture: ComponentFixture<SalaryDeductionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalaryDeductionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryDeductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
