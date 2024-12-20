import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor() {}

  login(username: string, password: string): boolean {
    if (username === 'user' && password === 'password') {
      this.isAuthenticated = true;
      localStorage.setItem('user', username); // Speichere den Benutzernamen oder Token
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('user'); // Entferne die Login-Daten
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user'); // Prüfe, ob ein Benutzer eingeloggt ist
  }
}
