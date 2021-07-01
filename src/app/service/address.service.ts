import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  private baseURL = 'http://localhost:8080/api/addresses';

  constructor(private http: HttpClient) {}

  createAddress(address: Object): Observable<Object> {
    return this.http.post(`${this.baseURL}`, address);
  }

  updateAddress(id: number, address: Object): Observable<Object> {
    return this.http.put(`${this.baseURL}/${id}`, address);
  }

  getAddressesList(): Observable<any> {
    return this.http.get(`${this.baseURL}`);
  }

  deleteAddress(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  getAddressesById(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/${id}`);
  }

  getAddressesByLongitudeAndLatitude(
    longitude: number,
    latitude: number
  ): Observable<any> {
    return this.http.get(
      `${this.baseURL}/searchByLongitudeAndLatitude/${longitude}/${latitude}`
    );
  }
}
