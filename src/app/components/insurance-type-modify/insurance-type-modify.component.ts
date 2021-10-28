import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InsuranceType } from 'src/app/services/Models/insurance-type.model';

@Component({
  selector: 'app-insurance-type-modify',
  templateUrl: './insurance-type-modify.component.html',
  styleUrls: ['./insurance-type-modify.component.css']
})
export class InsuranceTypeModifyComponent implements OnInit {

  @Input()
  insuranceType: InsuranceType | null = InsuranceType.createEmpty();

  @ViewChild(NgForm, { static: false })
  formRef!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  get valid() {
    return this.formRef.form.valid;
  }

}
