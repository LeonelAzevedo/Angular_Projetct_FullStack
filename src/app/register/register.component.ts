import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  onRegister() {
    if (this.password !== this.confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }

    // Adicione aqui a lógica para registrar o usuário
    console.log('Registrando usuário:', this.username);
    this.router.navigate(['/login']); // Exemplo de redirecionamento pós-registro
  }

  onCancel() {
    this.router.navigate(['/login']); // Exemplo de redirecionamento para a página de login
  }
}
