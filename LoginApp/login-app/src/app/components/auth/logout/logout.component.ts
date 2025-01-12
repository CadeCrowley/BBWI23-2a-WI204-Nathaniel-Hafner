// logout.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
})
export class LogoutComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        console.log('Abmeldung erfolgreich');
        // Leite den Benutzer auf die Login-Seite weiter
      },
      error: (err) => console.error('Fehler bei der Abmeldung:', err),
    });
  }
}
