import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreditCardService {
  private baseURL = 'http://localhost:8080/api/creditCards';

  constructor(private http: HttpClient) {}

  createCreditCard(creditCard: Object): Observable<Object> {
    return this.http.post(`${this.baseURL}`, creditCard);
  }

  updateCreditCard(id: number, creditCard: Object): Observable<Object> {
    return this.http.put(`${this.baseURL}/${id}`, creditCard);
  }

  getCreditCardList(): Observable<any> {
    return this.http.get(`${this.baseURL}`);
  }

  deleteCreditCard(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  getCreditCardById(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/${id}`);
  }

  getCreditCardByName(cardNumber: string): Observable<any> {
    return this.http.get(`${this.baseURL}/searchByCardNumber/${cardNumber}`);
  }
}
