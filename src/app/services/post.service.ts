import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Post } from '../models/Post';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    /*
      Parts of this:
      http is the http client injected into the constructor.
      .get is because we're running an HTTP get request.
      Post[] is the array of posts which we want as our return type
      this.postsUrl is the URL for the get request to use.
    */
    return this.http.get<Post[]>(this.postsUrl);
  }
}
