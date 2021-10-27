import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceTypeModifyComponent } from './insurance-type-modify.component';

describe('InsuranceTypeModifyComponent', () => {
  let component: InsuranceTypeModifyComponent;
  let fixture: ComponentFixture<InsuranceTypeModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceTypeModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceTypeModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
