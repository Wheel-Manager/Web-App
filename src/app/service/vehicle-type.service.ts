import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {VehicleType} from "../model/vehicle-type";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class VehicleTypeService {

  basePath = 'http://localhost:8080/api/vehicletypes'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred: ', error.error.message);
    } else {
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happened with request, please try again later.');
  }

  createVehicleType(item: any): Observable<VehicleType> {
    return this.http.post<VehicleType>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getVehicleTypeById(id: number): Observable<VehicleType> {
    return this.http.get<VehicleType>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getVehicleTypeList(): Observable<VehicleType> {
    return this.http.get<VehicleType>(this.basePath, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateVehicleType(id: number, item: any): Observable<VehicleType> {
    return this.http.put<VehicleType>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  deleteVehicleType(id: number): Observable<any> {
    return this.http.delete<VehicleType>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

}
