import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientFilter } from './Models/client-filter';
import { Client } from './Models/client.model';
import { InsuranceCar } from './Models/insurance-car.model';
import { InsuranceType } from './Models/insurance-type.model';
import { Phone } from './Models/phone.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }


  getClients(): Observable<Array<Client>> {
    return this.httpClient.get<Array<Client>>('/api/clients');
  }

  getPageClients(page: number, size: number): Observable<Array<Client>> {
    return this.httpClient.get<Array<Client>>(`/api/pageclients?page=${page}&size=${size}`);
  }

  getCountClients(): Observable<number> {
    return this.httpClient.get<number>(`/api/countclients`);
  }

  getPageClientsHeader(page: number, size: number, clientFilter: ClientFilter): Observable<any> {
    let params = new HttpParams();
    if (page != null)
      params = params.set("page", page);
    if (size != null)
      params = params.set("size", size);
    for (const key in clientFilter) {
      if (clientFilter.hasOwnProperty(key)) {
        const value = clientFilter[key];
        if (value != null) {
          if (value.toString().length)
            params = params.set(key, value.toString());
        }
      }
    }

    return this.httpClient.get<Response>(`/api/pageclients`, { observe: 'response', params });
  }

  addClient(client: Client) {
    return this.httpClient.post(`/api/client`, client);
  }

  updateClient(client: Client) {
    console.log("Client v servise" + client.clientId);
    return this.httpClient.put(`/api/client/${client.clientId}`, client);
  }

  removeClient(client: Client) {
    return this.httpClient.delete(`/api/client/${client.clientId}`);
  }

  getOneClient(clientId: number): Observable<Client> {
    return this.httpClient.get<Client>(`api/client/${clientId}`);
  }

  addPhone(phones: Array<Phone | null>, clientId: number) {
    return this.httpClient.post(`/api/phone/${clientId}`, phones);
  }

  removePhone(phoneId: number | null) {
    return this.httpClient.delete(`/api/phone/${phoneId}`);
  }

  updatePhone(phones: Phone | null) {
    return this.httpClient.put(`/api/phone/${phones?.phoneId}`, phones);
  }

  getCountInsurances(): Observable<number> {
    return this.httpClient.get<number>(`/api/countinsurances`);
  }

  getInsurancesCar(clientId: number): Observable<Array<InsuranceCar>> {
    return this.httpClient.get<Array<InsuranceCar>>(`/api/insurancescar/${clientId}`);
  }

  getInsurancePrice(insuranceCar: InsuranceCar): Observable<InsuranceCar> {
    return this.httpClient.get<InsuranceCar>(`/api/cost/${insuranceCar.enginePower}`);
  }

  addInsuranceCar(insuranceCar: InsuranceCar): Observable<InsuranceCar> {
    return this.httpClient.post<InsuranceCar>(`/api/car`, insuranceCar);
  }

  editInsuranceCar(insuranceCar: InsuranceCar): Observable<InsuranceCar> {
    return this.httpClient.put<InsuranceCar>(`/api/car/${insuranceCar.id}`, insuranceCar);
  }

  removeInsuranceCar(insuranceCar: InsuranceCar) {
    return this.httpClient.delete(`api/car/${insuranceCar.id}`);
  }

  getInsuranceType(): Observable<Array<InsuranceType>> {
    return this.httpClient.get<Array<InsuranceType>>(`api/carcategories/`);
  }

  addInsuranceType(insuranceType: InsuranceType): Observable<InsuranceType> {
    return this.httpClient.post<InsuranceType>(`api/carcategories`, insuranceType);
  }

  editInsuranceType(insuranceType: InsuranceType): Observable<InsuranceType> {
    return this.httpClient.put<InsuranceType>(`api/carcategories/${insuranceType.id}`, insuranceType);
  }

  removeInsuranceType(insuranceType: InsuranceType) {
    return this.httpClient.delete<any>(`api/carcategories/${insuranceType.id}`);
  }

}
