import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Offer} from "../model/offer";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  basePath = 'http://localhost:8080/api/offers'
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

  createOffer(item: any): Observable<Offer> {
    return this.http.post<Offer>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getOfferById(id: number): Observable<Offer> {
    return this.http.get<Offer>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getOfferList(): Observable<Offer> {
    return this.http.get<Offer>(this.basePath, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateOffer(id: number, item: any): Observable<Offer> {
    return this.http.put<Offer>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  deleteOffer(id: number): Observable<any> {
    return this.http.delete<Offer>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

}
