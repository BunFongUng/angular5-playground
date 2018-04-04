import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {
  // tslint:disable-next-line:no-inferrable-types
  baseUrl: string = 'http://localhost:3000/api/v1/posts';

  constructor(private http: HttpClient) {}

  getPostList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/list`);
  }

  createNewPost(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, body);
  }

  deletePost(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

  getPostDetail(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updatePost(id: string, body: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/update/${id}`, body);
  }
}
