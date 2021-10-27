import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';
import { InsuranceType } from 'src/app/services/Models/insurance-type.model';
import { InsuranceTypeModifyComponent } from '../insurance-type-modify/insurance-type-modify.component';

@Component({
  selector: 'app-insurance-type-list',
  templateUrl: './insurance-type-list.component.html',
  styleUrls: ['./insurance-type-list.component.css']
})
export class InsuranceTypeListComponent implements AfterViewInit {

  insuranceTypes = new Array<InsuranceType>();
  selectedInsuranceType: InsuranceType | null = null;
  isModalAddInsuranceTypeClosed = true;
  isModalEditInsuranceTypeClosed = true;
  isModalRemoveInsuranceTypeClosed = true;

  @ViewChild(InsuranceTypeModifyComponent, { static: false })
  insuranceTypeReff!: InsuranceTypeModifyComponent;

  constructor(
    private readonly clientsService: ClientsService,
    private router: Router) { }

  ngAfterViewInit(): void {
    this.loadInsuranceTypes();
  }

  loadInsuranceTypes() {
    this.clientsService.getInsuranceType()
      .subscribe(
        (response) => {
          this.insuranceTypes = response;
          for (let i = 0; i < this.insuranceTypes.length; i++) {
            if (i < this.insuranceTypes.length - 1)
              this.insuranceTypes[i].untilEnginePower = this.insuranceTypes[i + 1].enginePower - 1;
          }
        },
        (error) => console.log(error)
      );
  }

  addInsuranceType() {
    const body = this.insuranceTypeReff.insuranceType;

    if (this.insuranceTypeReff.valid && body) {
      this.clientsService.addInsuranceType(body).subscribe(
        (response) => {
          this.router.onSameUrlNavigation = 'reload';
          this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
          }
          this.loadInsuranceTypes();
        },
        (error) => {
          console.log(error)
        }
      );
    }
  }

  editInsuranceType() {
    const body = this.insuranceTypeReff.insuranceType;

    if (this.insuranceTypeReff.valid && body) {
      this.clientsService.editInsuranceType(body).subscribe(
        (response) => {
          this.router.onSameUrlNavigation = 'reload';
          this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
          }
          this.loadInsuranceTypes();
        },
        (error) => {
          console.log(error)
        }
      );
    }
  }

  removeInsuranceType() {
    if (this.selectedInsuranceType) {
      this.clientsService.removeInsuranceType(this.selectedInsuranceType).subscribe(
        (response) => {
          this.router.onSameUrlNavigation = 'reload';
          this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
          }
          this.loadInsuranceTypes();
        },
        (error) => {
          console.log(error)
        }
      );
    }
  }
}
