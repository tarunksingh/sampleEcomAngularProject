import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCard(): Observable<{}>{
    return this.http.get('https://run.mocky.io/v3/ca987707-db46-419e-9178-2bbdde3c3762');
  }
}
