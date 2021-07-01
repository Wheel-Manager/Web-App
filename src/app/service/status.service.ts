import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  private baseURL = 'http://localhost:8080/api/statuses';

  constructor(private http: HttpClient) {}

  createStatus(status: Object): Observable<Object> {
    return this.http.post(`${this.baseURL}`, status);
  }

  updateStatus(id: number, status: Object): Observable<Object> {
    return this.http.put(`${this.baseURL}/${id}`, status);
  }

  getStatusList(): Observable<any> {
    return this.http.get(`${this.baseURL}`);
  }

  deleteStatus(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  getStatusByStatusName(statusName: string): Observable<any> {
    return this.http.get(`${this.baseURL}/searchByStatusName/${statusName}`);
  }

  getStatusById(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/${id}`);
  }
}
