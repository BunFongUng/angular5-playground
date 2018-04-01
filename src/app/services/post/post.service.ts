import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {
  // tslint:disable-next-line:no-inferrable-types
  baseUrl: string = 'http://localhost:3000/api/v1/';

  constructor(private http: HttpClient) {}

  getPostList(): Observable<any> {
    return this.http.get(`${this.baseUrl}posts/list`);
  }
}
