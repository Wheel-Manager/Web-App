import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private baseURL = 'http://localhost:8080/api/vehicles';

  constructor(private http: HttpClient) {}

  createVehicle(vehicle: Object): Observable<Object> {
    return this.http.post(`${this.baseURL}`, vehicle);
  }

  updateVehicle(id: number, vehicle: Object): Observable<Object> {
    return this.http.put(`${this.baseURL}/${id}`, vehicle);
  }

  getVehicleList(): Observable<any> {
    return this.http.get(`${this.baseURL}`);
  }

  deleteVehicle(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  getVehicleByVehicleName(vehicleName: string): Observable<any> {
    return this.http.get(`${this.baseURL}/searchByVehicleName/${vehicleName}`);
  }

  getVehicleById(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/${id}`);
  }
}
