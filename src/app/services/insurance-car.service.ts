import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsuranceCar } from './Models/insurance-car.model';
import { InsuranceType } from './Models/insurance-type.model';

@Injectable({
  providedIn: 'root'
})
export class InsuranceCarService {

  constructor(private readonly httpClient: HttpClient) { }

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
