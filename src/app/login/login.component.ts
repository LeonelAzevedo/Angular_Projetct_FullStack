import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      console.log('Login:', username, password);
      this.router.navigate(['/dashboard']);
    } else {
      alert('Por favor, preencha ambos os campos.');
    }
  }

  onRegister() {
    this.router.navigate(['/register']);
  }
  goToHome() {
    this.router.navigate(['/home']);
  }
}
