import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RentalActivitiesService {
  private baseURL = 'http://localhost:8080/api/rentalActivities';

  constructor(private http: HttpClient) {}

  createRentalActivities(rentalActivities: Object): Observable<Object> {
    return this.http.post(`${this.baseURL}`, rentalActivities);
  }

  updateRentalActivities(
    id: number,
    rentalActivities: Object
  ): Observable<Object> {
    return this.http.put(`${this.baseURL}/${id}`, rentalActivities);
  }

  getRentalActivitiesList(): Observable<any> {
    return this.http.get(`${this.baseURL}`);
  }

  deleteRentalActivities(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  getRentalActivitiesById(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/${id}`);
  }
}
