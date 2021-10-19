import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Phone } from 'src/app/services/Models/phone.model';

@Component({
  selector: 'app-phone-modify',
  templateUrl: './phone-modify.component.html',
  styleUrls: ['./phone-modify.component.css']
})
export class PhoneModifyComponent implements OnInit {

  @Input()
  phone: Phone | null = new Phone();

  @ViewChild(NgForm, {static: false})
  formRef!: NgForm;

  constructor() { }

  get valid() {
    return this.formRef.form.valid;
  }

  ngOnInit(): void {
  }


}

