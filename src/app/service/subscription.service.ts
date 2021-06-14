import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Subscription} from "../model/subscription";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  basePath = 'http://localhost:8080/api/subscription'
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

  createSubscription(item: any): Observable<Subscription> {
    return this.http.post<Subscription>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getSubscriptionById(id: number): Observable<Subscription> {
    return this.http.get<Subscription>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getSubscriptionList(): Observable<Subscription> {
    return this.http.get<Subscription>(this.basePath, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateSubscription(id: number, item: any): Observable<Subscription> {
    return this.http.put<Subscription>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  deleteSubscription(id: number): Observable<any> {
    return this.http.delete<Subscription>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

}
