import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface User {
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) {
  }

  getUser(): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }

  getGetPost(id: string, comments: string): Observable<any> {
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/posts/${id}/${comments}`
    );
  }

  getPostsWithParams(postId: string): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/comments',
      {
        params: {postId}
      });
  }

  postUser(userName: string, userAge: number): Observable<any> {
    return this.httpClient.post(`https://jsonplaceholder.typicode.com/posts`, {
      userName, userAge
    });
  }

  putPost(id: string): Observable<any> {
    return this.httpClient.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      postId: id
    });
  }

  patchPost(id: string): Observable<any> {
    return this.httpClient.patch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      postId: id
    });
  }

  deletePost(id: string): Observable<any> {
    return this.httpClient.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
