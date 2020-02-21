import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mainUrl } from './config';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  getAllBooks(): Observable<Object> {
    return this.http.get(mainUrl + '/api/books');
  }
  getBook(id): Observable<Object> {
    return this.http.get(mainUrl + '/api/books/' + id);
  }
}
