import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logout() {
    throw new Error('Method not implemented.');
  }
  getCurrentUser(): any {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'your_api_url';
  isLoggedIn: any;

  constructor(private http: HttpClient) {}

  login(loginData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, loginData);
  }

  register(registerData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, registerData);
  }
}
