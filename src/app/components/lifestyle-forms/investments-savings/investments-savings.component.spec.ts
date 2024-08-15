import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsSavingsComponent } from './investments-savings.component';

describe('InvestmentsSavingsComponent', () => {
  let component: InvestmentsSavingsComponent;
  let fixture: ComponentFixture<InvestmentsSavingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentsSavingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentsSavingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
