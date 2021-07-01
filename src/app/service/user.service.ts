import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {User} from "../model/user";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  basePath = 'http://localhost:8080/api/users'
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

  createUser(item: any): Observable<User> {
    return this.http.post<User>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getUserList(): Observable<User> {
    return this.http.get<User>(this.basePath, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateUser(id: number, item: any): Observable<User> {
    return this.http.put<User>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<User>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
