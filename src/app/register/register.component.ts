import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerData = { email: '', password: '' };
  registrationError: string | undefined;

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.authService.register(this.registerData).subscribe(
      (response) => {
        this.router.navigate(['/login']);
      },
      (error) => {
        this.registrationError = 'Registration failed. Please try again.';
      }
    );
  }
}


