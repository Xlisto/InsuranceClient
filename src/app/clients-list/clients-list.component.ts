import { AfterViewInit, Component, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsService } from '../services/clients.service';
import { Client } from '../services/Models/client.model';
import { Phone } from '../services/Models/phone.model';
import { PhoneModifyComponent } from '../components/phone-modify/phone-modify.component';
import { ClientModifyComponent } from '../components/client-modify/client-modify.component';
import { PageComponent } from '../components/page/page.component';
import { Page } from '../services/Models/page.model';
import { HttpResponse } from '@angular/common/http';
import { SessionsService } from '../services/sessions.service';
import { ClientFilter } from '../services/Models/client-filter';
import { ClientFilterComponent } from '../components/client-filter/client-filter.component';
import { ClientDetailComponent } from '../components/client-detail/client-detail.component';

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
  selectedClient: Client | null = null;

  @ViewChild(ClientFilterComponent)
  clientFilterRef!: ClientFilterComponent;

  @ViewChild(PhoneModifyComponent, { static: false })
  phoneAddRef!: PhoneModifyComponent;

  @ViewChild(ClientModifyComponent, { static: false })
  clientAddRef!: ClientModifyComponent;

  @ViewChild(ClientDetailComponent, {static: false})
  clientDetailAddref!: ClientDetailComponent;

  @ViewChild(PageComponent)
  pageComponent!: PageComponent;


  

  isModalAddPhoneClosed = true;
  isModalRemovePhoneClosed = true;
  isModalUpdatePhoneClosed = true;
  isModalAddClientClosed = true;
  isModalRemoveClientClosed = true;
  isModalUpdateClientClosed = true;
  isModalDetailClientClosed = true;
  isModalInsuranceTypeClosed = true;
  maxPages = 0;
  countClients = 0;
  countInsurances = 0;

  constructor(
    private readonly clientsService: ClientsService,
    private router: Router
  ) { }

  ngAfterViewInit(): void {

    /*this.clientsService.getClients()
      .subscribe(
        (clients: Array<Client>) => { this.clients = clients; },
        (error) => console.log(error),
        () => { }
      );*/
    this.loadClients(this.pageComponent.getActualPage(), this.pageComponent.getSize());

  }

  loadPageClients(page: Page) {
    this.loadClients(page.page, page.size);
  }

  loadFirstPage() {
    console.log("load first")
    this.pageComponent.setActualPage(0);
    this.loadClients(0,5);
  }

  loadClients(page: number, size: number) {
    const clientFilter = this.clientFilterRef.clientFilter;
    /**this.clientsService.getPageClients(page, size)
      .subscribe(
        (clients: Array<Client>) => { this.clients = clients;},
        (error) => console.log(error),
        () => { }
      );*/
      this.clientsService.getCountInsurances()
      .subscribe(
        (response) => this.countInsurances = response,
        (error) => console.error
      ); 
    this.clientsService.getCountClients()
      .subscribe(
        (response) => this.countClients = response,
        (error) => console.error
      );
    this.clientsService.getPageClientsHeader(page, size, clientFilter)
      .subscribe(
        (data: HttpResponse<any>) => { this.clients = data.body; this.maxPages = Number(data.headers.get('pages')); },
        (error) => console.log(error)
      );

  }

  addPhone() {
    const body = [
      this.phoneAddRef.phone
    ]

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
    this.clientsService.removePhone(phone.phoneId).subscribe(
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
    const body = this.phoneAddRef.phone;


    if (this.phoneAddRef.valid) {
      this.clientsService.updatePhone(body).subscribe(
        (response) => {
          console.log("PAge " + this.pageComponent.actualPage);

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

  addClient() {
    const body = this.clientAddRef.client;
    //console.log("valid "+(this.clientAddRef.client?.zip)?.toString().replace(" ",""));

    if (this.clientAddRef.valid && body != null) {
      this.clientsService.addClient(body).subscribe(
        (response) => {
          this.router.onSameUrlNavigation = 'reload';
          this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
          }
          this.clientAddRef.formRef.resetForm();
          this.isModalAddClientClosed = true;
          this.router.navigate(['/clients-list']);
        }, (error) => console.log(error)
      );
    }
  }

  updateClient() {
    if (this.clientAddRef.client?.registryNumber == null) {
      this.clientAddRef.client!.registryNumber = "";
    }
    const body = this.clientAddRef.client;
    if (this.clientAddRef.valid && body != null) {


      this.clientsService.updateClient(body).subscribe(
        (response) => {
          this.router.onSameUrlNavigation = 'reload';
          this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
          }
          this.clientAddRef.formRef.resetForm();
          this.isModalUpdateClientClosed = true;
          this.router.navigate(['/clients-list']);
        }, (error) => console.log(error)
      );
    }
  }

  removeClient(client: Client) {
    this.clientsService.removeClient(client).subscribe(
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
}

