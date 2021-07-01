import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private baseURL = 'http://localhost:8080/api/comments';

  constructor(private http: HttpClient) {}

  createComment(comment: Object): Observable<Object> {
    return this.http.post(`${this.baseURL}`, comment);
  }

  updateComment(id: number, comment: Object): Observable<Object> {
    return this.http.put(`${this.baseURL}/${id}`, comment);
  }

  getCommentList(): Observable<any> {
    return this.http.get(`${this.baseURL}`);
  }

  deleteComment(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  getCommentByPublicationDate(publicationDate: string): Observable<any> {
    return this.http.get(
      `${this.baseURL}/` +
        `searchCommentByPublicationDate?` +
        `publicationDate=` +
        publicationDate
    );
  }

  getCommentById(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/${id}`);
  }
}
