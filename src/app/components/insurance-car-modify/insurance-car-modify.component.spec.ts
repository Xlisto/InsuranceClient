import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceCarModifyComponent } from './insurance-car-modify.component';

describe('InsuranceCarModifyComponent', () => {
  let component: InsuranceCarModifyComponent;
  let fixture: ComponentFixture<InsuranceCarModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceCarModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceCarModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
