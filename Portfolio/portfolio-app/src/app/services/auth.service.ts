import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor() {}

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '1234') {
      this.isAuthenticated = true;
      localStorage.setItem('admin', username); // Speichere den Benutzernamen oder Token
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('admin'); // Entferne die Login-Daten
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('admin'); // Prüfe, ob ein Benutzer eingeloggt ist
  }
}
