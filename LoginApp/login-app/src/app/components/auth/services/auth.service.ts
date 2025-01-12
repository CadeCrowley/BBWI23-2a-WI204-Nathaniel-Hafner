import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8000/'; // Django Backend Basis-URL

  constructor(private http: HttpClient) {}

  // Methode, um das CSRF-Token aus den Cookies zu extrahieren
  getCSRFToken(): string {
    const name = 'csrftoken';
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
      if (cookie.startsWith(name + '=')) {
        return cookie.split('=')[1];
      }
    }
    return '';
  }

  // Login-Methode
  login(username: string, password: string): Observable<any> {
    const url = `${this.baseUrl}auth/login/`; // URL für den Login-Endpunkt
    const body = { username, password };
    const csrfToken = this.getCSRFToken(); // CSRF-Token abrufen

    return this.http.post(url, body, {
      withCredentials: true, // Cookies senden
      headers: {
        'X-CSRFToken': csrfToken, // CSRF-Token-Header
        'X-Requested-With': 'XMLHttpRequest', // AJAX-Signal für Django
      },
    });
  }

  logout(): Observable<any> {
    const url = `${this.baseUrl}auth/logout/`;
    const csrfToken = this.getCSRFToken(); // CSRF-Token abrufen

    return this.http.post(url, {}, {
      withCredentials: true,
      headers: {
        'X-CSRFToken': csrfToken, // CSRF-Header setzen
        'X-Requested-With': 'XMLHttpRequest',
      },
    });
  }

  getUserDetails(): Observable<any> {
    const url = '/auth/me/';
    const csrfToken = this.getCSRFToken();
  
    return this.http.get(url, {
      withCredentials: true, // Cookies senden
      headers: {
        'X-CSRFToken': csrfToken,
        'X-Requested-With': 'XMLHttpRequest', // AJAX-Signal
      },
    });
  }
}
