import { Component, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientFilter } from 'src/app/services/Models/client-filter';

@Component({
  selector: 'app-client-filter',
  templateUrl: './client-filter.component.html',
  styleUrls: ['./client-filter.component.css']
})
export class ClientFilterComponent implements OnInit {

  clientFilter = new ClientFilter();

  /*@ViewChild(NgForm, {static: false})
  formRef!: NgForm;*/

  @Output()
  public onFilter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  /*get valid() {
    console.log("valid "+this.formRef.form.valid);
    return this.formRef.form.valid;
  }*/

  ngOnInit(): void {
  }

}
