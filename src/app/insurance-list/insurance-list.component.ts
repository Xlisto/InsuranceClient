import { HttpResponse } from '@angular/common/http';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsListComponent } from '../clients-list/clients-list.component';
import { InsuranceCarModifyComponent } from '../components/insurance-car-modify/insurance-car-modify.component';
import { ClientsService } from '../services/clients.service';
import { Client } from '../services/Models/client.model';
import { InsuranceCar } from '../services/Models/insurance-car.model';

@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.component.html',
  styleUrls: ['./insurance-list.component.css']
})
export class InsuranceListComponent implements AfterViewInit {

  insurancesCars: Array<InsuranceCar> = [];
  client: Client | null = null;
  clientId = 0;
  selectedInsurance: InsuranceCar | null = null;
  isModalNewInsuranceCarClosed = true;
  isModalEditInsuranceCarClosed = true;
  isModalRemoveInsuranceCarClosed = true;

  @ViewChild(InsuranceCarModifyComponent, { static: false })
  insuranceCarReff!: InsuranceCarModifyComponent;


  constructor(
    private readonly clientsService: ClientsService,
    private router: Router, private activateRoute: ActivatedRoute) { }

  ngAfterViewInit(): void {
    this.clientId = this.activateRoute.snapshot.params.id;
    this.clientsService.getOneClient(this.clientId)
      .subscribe(
        (response) => { this.client = response; },
        (error) => console.log(error)
      );

    this.clientsService.getInsurancesCar(this.clientId)
      .subscribe(
        (response: Array<InsuranceCar>) => {
          this.insurancesCars = response;
          for (let insuranceCar of this.insurancesCars) {
            this.clientsService.getInsurancePrice(insuranceCar)
              .subscribe(
                (response) => { insuranceCar.cost = response.cost },
                (error) => console.log(error)
              );
          }
        },
        (error) => console.log(error)
      );
  }

  addInsurance() {
    const body = this.insuranceCarReff.insuranceCar;

    if (body != null)
      this.clientsService.addInsuranceCar(body)
        .subscribe(
          (response) => {
            this.router.onSameUrlNavigation = 'reload';
            this.router.routeReuseStrategy.shouldReuseRoute = function () {
              return false;
            }
            this.insuranceCarReff.formRef.resetForm();
            this.isModalNewInsuranceCarClosed = true;
            this.router.navigate(['/insurance-list/' + this.clientId]);
          },
          (error) => console.log(error)
        );
  }

  editInsurance() {
    const body = this.insuranceCarReff.insuranceCar;

    if (body != null)
      this.clientsService.editInsuranceCar(body)
        .subscribe(
          (response) => {
            this.router.onSameUrlNavigation = 'reload';
            this.router.routeReuseStrategy.shouldReuseRoute = function () {
              return false;
            }
            this.insuranceCarReff.formRef.resetForm();
            this.isModalEditInsuranceCarClosed = true;
            this.router.navigate(['/insurance-list/' + this.clientId]);
          },
          (error) => console.log(error)
        );
  }

  removeInsurance() {
    if (this.selectedInsurance != null)
      this.clientsService.removeInsuranceCar(this.selectedInsurance)
        .subscribe(
          (response) => {
            this.router.onSameUrlNavigation = 'reload';
            this.router.routeReuseStrategy.shouldReuseRoute = function () {
              return false;
            }
            this.isModalRemoveInsuranceCarClosed = true;
            this.router.navigate(['/insurance-list/' + this.clientId])
          },
          (error) => console.log(error)
        );
  }

  back():void {
    this.router.navigate(["/clients-list"]);
  }

}
