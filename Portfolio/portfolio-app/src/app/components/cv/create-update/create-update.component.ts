import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.scss']
})
export class CreateUpdateComponent {
  cvData = {
    title: '',
    company: '',
    date: ''
  };

  constructor(private router: Router) {}

  submitForm(): void {
    console.log('CV-Daten gespeichert:', this.cvData);

    // Zurück zur CV-Liste navigieren
    this.router.navigate(['/cv']);
  }
}
