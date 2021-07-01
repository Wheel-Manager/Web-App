import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  private baseURL = 'http://localhost:8080/api/brands';

  constructor(private http: HttpClient) {}

  createBrand(brand: Object): Observable<Object> {
    return this.http.post(`${this.baseURL}`, brand);
  }

  updateBrand(id: number, brand: Object): Observable<Object> {
    return this.http.put(`${this.baseURL}/${id}`, brand);
  }

  getBrandList(): Observable<any> {
    return this.http.get(`${this.baseURL}`);
  }

  deleteBrand(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  getBrandByBrandName(brandName: string): Observable<any> {
    return this.http.get(`${this.baseURL}/searchByBrandName/${brandName}`);
  }

  getBrandById(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/${id}`);
  }
}
