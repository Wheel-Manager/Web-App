import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  private baseURL = 'http://localhost:8080/api/offers';

  constructor(private http: HttpClient) {}

  createOffer(offer: Object): Observable<Object> {
    return this.http.post(`${this.baseURL}`, offer);
  }

  updateOffer(id: number, offer: Object): Observable<Object> {
    return this.http.put(`${this.baseURL}/${id}`, offer);
  }

  getOfferList(): Observable<any> {
    return this.http.get(`${this.baseURL}`);
  }

  deleteOffer(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  getOfferById(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/${id}`);
  }

  getOfferByName(offerName: string): Observable<any> {
    return this.http.get(`${this.baseURL}/searchByOfferName/${offerName}`);
  }
}
