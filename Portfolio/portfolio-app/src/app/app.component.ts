import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router'; // Import für Navigation
import { AuthService } from './services/auth.service'; // Import des AuthService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  isAuthenticated = false;
  currentLanguage: string = 'de'; // Standard-Sprache (Deutsch)
  item: any;

  constructor(private authService: AuthService, private router: Router) {
    this.router.events
    .subscribe(() => this.isAuthenticated = this.authService.isAuthenticated())
  } // Services injizieren

  ngAfterViewInit(): void {
    // Initialisiere alle Dropdowns (Sprachwahl und Hamburger-Menü)
    const dropdownElems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(dropdownElems, {
      coverTrigger: false, // Dropdown erscheint unterhalb des Triggers
      closeOnClick: true   // Dropdown schließt nach Auswahl
    });
  }

  // Sprachumschaltung
  switchLanguage(lang: string): void {
    this.currentLanguage = lang;
    console.log(`Sprache geändert zu: ${lang}`);
  }

  // Logout-Logik
  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
    console.log('Benutzer wurde ausgeloggt');
  }

}
