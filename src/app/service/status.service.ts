import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Status} from "../model/status";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  basePath = 'http://localhost:8080/api/statuses'
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

  createStatus(item: any): Observable<Status> {
    return this.http.post<Status>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getStatusById(id: number): Observable<Status> {
    return this.http.get<Status>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getStatusList(): Observable<Status> {
    return this.http.get<Status>(this.basePath, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateStatus(id: number, item: any): Observable<Status> {
    return this.http.put<Status>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  deleteStatus(id: number): Observable<any> {
    return this.http.delete<Status>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
