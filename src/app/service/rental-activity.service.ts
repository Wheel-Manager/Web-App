import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {RentalActivity} from "../model/rental-activity";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RentalActivityService {

  basePath = 'http://localhost:8080/api/rental_activities'
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

  createRentalActivity(item: any): Observable<RentalActivity> {
    return this.http.post<RentalActivity>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getRentalActivityById(id: number): Observable<RentalActivity> {
    return this.http.get<RentalActivity>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getRentalActivityList(): Observable<RentalActivity> {
    return this.http.get<RentalActivity>(this.basePath, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateRentalActivity(id: number, item: any): Observable<RentalActivity> {
    return this.http.put<RentalActivity>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  deleteRentalActivity(id: number): Observable<any> {
    return this.http.delete<RentalActivity>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

}
