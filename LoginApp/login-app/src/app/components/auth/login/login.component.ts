// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms'; // FormsModule importieren

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true, // Wenn es standalone ist
  imports: [FormsModule],
  
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log('Login erfolgreich:', response);
        this.errorMessage = '';
        // Leite den Benutzer weiter, z. B. zur Startseite
      },
      error: (err) => {
        this.errorMessage = 'Login fehlgeschlagen. Bitte überprüfen Sie Ihre Eingaben.';
        console.error(err);
      },
    });
  }
}
