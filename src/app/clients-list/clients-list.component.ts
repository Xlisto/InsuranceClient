import { AfterViewInit, Component, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsService } from '../services/clients.service';
import { Client } from '../services/Models/client.model';
import { Phone } from '../services/Models/phone.model';
import { PhoneModifyComponent } from '../components/phone-modify/phone-modify.component';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements AfterViewInit {

  clients: Array<Client> = [];

  clientId = 0;
  phoneNumber: string | null = "";
  phoneId: number | null = 0;

  @Input()
  phone: Phone | null = new Phone();
  selectedPhone: Phone | null = null;

  @ViewChild(PhoneModifyComponent, { static: false })
  phoneAddRef!: PhoneModifyComponent;

  isModalAddPhoneClosed = true;
  isModalRemovePhoneClosed = true;
  isModalUpdatePhoneClosed = true;

  constructor(
    private readonly clientsService: ClientsService,
    private router: Router
  ) { }

  ngAfterViewInit(): void {

    this.clientsService.getClients()
      .subscribe(
        (clients: Array<Client>) => { this.clients = clients; },
        (error) => console.log(error),
        () => { }

      );

  }

  addPhone() {
    const body = [
      this.phoneAddRef.phone
    ]
    console.log("phone2 "+this.phoneAddRef.phone?.phoneNumber);
    if (this.phoneAddRef.valid) {
      this.clientsService.addPhone(body, this.clientId).subscribe(
        (response) => {
          this.router.onSameUrlNavigation = 'reload';
          this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
          }
          this.phoneAddRef.formRef.resetForm();
          this.isModalAddPhoneClosed = true;
          this.router.navigate(['/clients-list']);
        },
        (error) => {
          console.log(error)
        }
      );
    }
  }

  removePhone(phone: Phone) {
    this.clientsService.removePhone(phone.phone_id).subscribe(
      (response) => {
        this.router.onSameUrlNavigation = "reload";
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
        }
        this.isModalRemovePhoneClosed = true;
        this.router.navigate(['clients-list']);
      },
      (error) => console.log(error)
    );
  }

  updatePhone() {
    const body = this.phoneAddRef.phone
    
    
    if(this.phoneAddRef.valid) {
      this.clientsService.updatePhone(body).subscribe(
        (response) => {
          this.router.onSameUrlNavigation = 'reload';
          this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
          }
          this.phoneAddRef.formRef.resetForm();
          this.isModalAddPhoneClosed = true;
          this.router.navigate(['/clients-list']);
        },
        (error) => {
          console.log(error)
        }
      );
    }

    //console.log("body: "+body[0]!.phoneNumber);
    console.log("phone2 "+this.phoneAddRef.valid);
    console.log("phone2 "+this.phoneAddRef.phone?.phone_id);
    //this.phoneAddRef.formRef.resetForm();
  }


}

