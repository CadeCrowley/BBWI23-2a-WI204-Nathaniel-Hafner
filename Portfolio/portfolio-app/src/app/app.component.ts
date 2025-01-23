import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

// ngx-translate
import { TranslateService } from '@ngx-translate/core';

// Für Materialize CSS (sofern du es nutzt)
declare var M: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  isAuthenticated = false;
  currentLanguage: string = 'de'; // Standardsprache

  constructor(
    private authService: AuthService,
    private router: Router,
    private translate: TranslateService
  ) {
    // verfügbare Sprachen definieren
    this.translate.addLangs(['de', 'en', 'ja']);

    // Standard- und Fallback-Sprache setzen
    this.translate.setDefaultLang('de');

    // Anfangssprache (entspricht currentLanguage)
    this.translate.use(this.currentLanguage);

    // Überwache Router-Events, um isAuthenticated aktuell zu halten
    this.router.events
      .subscribe(() => this.isAuthenticated = this.authService.isAuthenticated());
  }

  ngAfterViewInit(): void {
    // Initialisiere alle Dropdowns (Sprachwahl und Menü) – MaterializeCSS
    const dropdownElems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(dropdownElems, {
      coverTrigger: false,
      closeOnClick: true
    });
  }

  // Sprachumschaltung
  switchLanguage(lang: string): void {
    this.currentLanguage = lang;
    this.translate.use(lang); // ngx-translate auf neue Sprache umschalten
    console.log(`Sprache geändert zu: ${lang}`);
  }

  // Logout-Funktion
  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
    console.log('Benutzer wurde ausgeloggt');
  }
}
