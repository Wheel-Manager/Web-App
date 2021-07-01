import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAddressService {
  private baseURL = 'http://localhost:8080/api/userAddress';

  constructor(private http: HttpClient) {}

  createUserAddress(userAddress: Object): Observable<Object> {
    return this.http.post(`${this.baseURL}`, userAddress);
  }

  updateUserAddress(id: number, userAddress: Object): Observable<Object> {
    return this.http.put(`${this.baseURL}/${id}`, userAddress);
  }

  getUserAddressesList(): Observable<any> {
    return this.http.get(`${this.baseURL}`);
  }

  deleteUserAddress(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  getUserAddressesById(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/${id}`);
  }
}
