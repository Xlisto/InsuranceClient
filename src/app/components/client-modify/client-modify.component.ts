import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
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

  constructor() { console.log("client: "+this.client?.client_id);};

  get valid() {
    
    console.log("VAlid "+this.client?.first_name);
    return this.formRef.form.valid;
  }

  ngOnInit(): void {
  }

  test() {
    console.log("test");
  }

}
