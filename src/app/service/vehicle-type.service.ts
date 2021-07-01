import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehicleTypeService {
  private baseURL = 'http://localhost:8080/api/vehicletypes';

  constructor(private http: HttpClient) {}

  createVehicleType(vehicleType: Object): Observable<Object> {
    return this.http.post(`${this.baseURL}`, vehicleType);
  }

  updateVehicleType(id: number, vehicleType: Object): Observable<Object> {
    return this.http.put(`${this.baseURL}/${id}`, vehicleType);
  }

  getVehicleTypeList(): Observable<any> {
    return this.http.get(`${this.baseURL}`);
  }

  deleteVehicleType(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  getVehicleTypeByTypeName(typeName: string): Observable<any> {
    return this.http.get(`${this.baseURL}/searchByTypeName/${typeName}`);
  }

  getVehicleTypeById(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/${id}`);
  }
}
