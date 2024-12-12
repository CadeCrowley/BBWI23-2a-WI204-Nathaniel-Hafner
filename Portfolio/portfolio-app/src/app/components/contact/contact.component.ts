import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Formular erfolgreich abgeschickt!', this.contact);
      // Hier kannst du die Formulardaten an eine API senden
      form.reset(); // Formular zurücksetzen
    } else {
      console.log('Formular ist ungültig.');
    }
  }
}
