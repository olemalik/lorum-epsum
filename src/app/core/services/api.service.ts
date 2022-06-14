import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  get<T>(endPoint: string, params: any, loadSpinner: boolean = false, requestOptions?: any[]): Observable<any> {
    let reqHeaders = new HttpHeaders();
    reqHeaders.append('X-RequestDigest', '');
    reqHeaders.append('Accept', 'application/json; odata=verbose');
    reqHeaders.append('scheme', 'https');
    reqHeaders.append('Method', 'GET');

    if (requestOptions != null && requestOptions != undefined) {
        requestOptions.forEach(data => {
            //const key = requestOptions.length > 1 ? Object.keys(data[0]).toString() : Object.keys(data)[0];//;
            //const value = requestOptions.length > 1 ? (Object.values(data)[0][key]).toString() : (Object.values(data)[0]).toString();
            //reqHeaders = reqHeaders.set(key, value);
        });
    }

    return this.http.get<T>(endPoint, { headers: reqHeaders, params: params });    ;
  }
}
