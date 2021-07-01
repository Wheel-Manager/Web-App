import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private baseURL = 'http://localhost:8080/api/reservations';

  constructor(private http: HttpClient) {}

  createReservation(reservation: Object): Observable<Object> {
    return this.http.post(`${this.baseURL}`, reservation);
  }

  updateReservation(id: number, reservation: Object): Observable<Object> {
    return this.http.put(`${this.baseURL}/${id}`, reservation);
  }

  getReservationList(): Observable<any> {
    return this.http.get(`${this.baseURL}`);
  }

  deleteReservation(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  getReservationBetweenDates(
    startDate: string,
    endDate: string
  ): Observable<any> {
    return this.http.get(
      `${this.baseURL}/` +
        `searchReservationBetweenDates?` +
        `endDate=` +
        endDate +
        `&startDate=` +
        startDate
    );
  }

  getReservationById(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/${id}`);
  }
}
