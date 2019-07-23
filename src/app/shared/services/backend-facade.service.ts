import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendFacadeService {
  private url = 'http://virtual-store.8lc.mx:10000/store';

  constructor(private http: HttpClient) { }

  serviceGet(endpoint: string): Observable<any> {
    return this
            .http
            .get(this.url + endpoint)
            .pipe(
                map(res => res)
            );
  }

  servicePut(endpoint: string, requestBody?: any): Observable<any> {
    return this
            .http
            .put(this.url + endpoint, requestBody)
            .pipe(
                map(res => res)
            );
  }

  servicePost(endpoint: string, requestBody?: any): Observable<any> {
    return this
            .http
            .post(this.url + endpoint, requestBody)
            .pipe(
                map(res => res)
            );
  }

  serviceDelete(endpoint: string): Observable<any> {
    return this
            .http
            .delete(this.url + endpoint)
            .pipe(
                map(res => res)
            );
  }
}
