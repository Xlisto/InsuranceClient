import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from 'src/app/services/Models/client.model';

@Component({
  selector: 'app-client-modify',
  templateUrl: './client-modify.component.html',
  styleUrls: ['./client-modify.component.css']
})
export class ClientModifyComponent implements OnInit {

  @Input()
  client: Client | null = Client.createEmpty();

  @ViewChild(NgForm, { static: false })
  formRef!: NgForm;

  constructor() {};

  get valid() {
    return this.formRef.form.valid;
  }

  ngOnInit(): void {
  }

}
