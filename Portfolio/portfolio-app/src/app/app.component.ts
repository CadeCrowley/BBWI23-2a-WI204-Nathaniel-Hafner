import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  currentLanguage: string = 'de'; // Standard-Sprache (Japanisch)
item: any;

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
}
