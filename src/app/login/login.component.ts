import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = { email: '', password: '' };
  loginError: string | undefined;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.loginData).subscribe(
      (response) => {
        this.router.navigate(['/quiz']);
      },
      (error) => {
        this.loginError = 'Login failed. Please check your credentials.';
      }
    );
  }
}


