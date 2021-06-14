import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {CreditCard} from "../model/credit-card";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  basePath = 'http://localhost:8080/api/credit_cards'
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

  createCreditCard(item: any): Observable<CreditCard> {
    return this.http.post<CreditCard>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getCreditCardById(id: number): Observable<CreditCard> {
    return this.http.get<CreditCard>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getCreditCardList(): Observable<CreditCard> {
    return this.http.get<CreditCard>(this.basePath, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateCreditCard(id: number, item: any): Observable<CreditCard> {
    return this.http.put<CreditCard>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  deleteCreditCard(id: number): Observable<any> {
    return this.http.delete<CreditCard>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

}
