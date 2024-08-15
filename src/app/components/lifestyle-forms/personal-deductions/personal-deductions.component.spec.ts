import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDeductionsComponent } from './personal-deductions.component';

describe('PersonalDeductionsComponent', () => {
  let component: PersonalDeductionsComponent;
  let fixture: ComponentFixture<PersonalDeductionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalDeductionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalDeductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
