import { AfterViewInit, Component, Input } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';
import { InsuranceCarService } from 'src/app/services/insurance-car.service';
import { Client } from 'src/app/services/Models/client.model';
import { InsuranceCar } from 'src/app/services/Models/insurance-car.model';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements AfterViewInit {

  @Input()
  client: Client | null = Client.createEmpty();

  insuranceCars = new Array<InsuranceCar>();

  constructor(
    private readonly clientsService: ClientsService,
    private readonly insuranceCarService: InsuranceCarService,) { }

  ngAfterViewInit() {
    if (this.client)
      this.getInsurances(this.client);
  }

  getInsurances(client: Client) {
    if (client.clientId)
      this.insuranceCarService.getInsurancesCar(client.clientId)
        .subscribe(
          (response) => {
            this.insuranceCars = response;

            for (let insuranceCar of response) {
              this.insuranceCarService.getInsurancePrice(insuranceCar)
                .subscribe(
                  (response) => { insuranceCar.cost = response.cost },
                  (error) => console.log(error)
                );
            }
          },
          (error) => console.log(error)
        );
  }


}
