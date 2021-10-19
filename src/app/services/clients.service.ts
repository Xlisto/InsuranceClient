import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './Models/client.model';
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

  addPhone(phones: Array<Phone | null>, clientId: number) {
    return this.httpClient.post(`/api/phone/${clientId}`, phones);
  }

  removePhone(phoneId: number | null) {
    return this.httpClient.delete(`/api/phone/${phoneId}`);
  }

  updatePhone(phones: Phone | null) {
    return this.httpClient.put(`/api/phone/${phones?.phone_id}`, phones);
  }

}
