import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  private baseURL = 'http://wheelmanagerhackdead.herokuapp.com/api/subscriptions';

  constructor(private http: HttpClient) {}

  createSubscription(subscription: Object): Observable<Object> {
    return this.http.post(`${this.baseURL}`, subscription);
  }

  updateSubscription(id: number, subscription: Object): Observable<Object> {
    return this.http.put(`${this.baseURL}/${id}`, subscription);
  }

  getSubscriptionList(): Observable<any> {
    return this.http.get(`${this.baseURL}`);
  }

  deleteSubscription(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  getSubscriptionById(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/${id}`);
  }

  getSubscriptionByStartDate(startDate: string): Observable<any> {
    return this.http.get(
      `${this.baseURL}/searchSubscriptionByStartDate?` +
        `startDate=` +
        startDate
    );
  }
}
