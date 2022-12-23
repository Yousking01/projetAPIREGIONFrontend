import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ICredentials } from '../_interfaces/icredentials';
import { IToken } from '../_interfaces/itoken';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {



    url = 'http://localhost:8080/api/auth/signin'
  
    constructor(private http: HttpClient) { }

  login(credentials: ICredentials): Observable<IToken>{
    return this.http.post<IToken>(this.url, credentials)
  }
}
