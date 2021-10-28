import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InsuranceCar } from 'src/app/services/Models/insurance-car.model';

@Component({
  selector: 'app-insurance-car-modify',
  templateUrl: './insurance-car-modify.component.html',
  styleUrls: ['./insurance-car-modify.component.css']
})
export class InsuranceCarModifyComponent implements OnInit {

  @Input()
  public clientId = 0;

  @Input()
  insuranceCar: InsuranceCar | null = InsuranceCar.createEmpty();

  @ViewChild(NgForm, { static: false })
  formRef!: NgForm;

  public today = new Date('dd.MM.yyyy');

  constructor() { }

  get valid() {
    return this.formRef.form.valid;
  }

  onChangeDate(value: any) {
    this.today = new Date(value);
  }

  ngOnInit(): void {
    this.insuranceCar!.clientId = this.clientId;
  }

}
