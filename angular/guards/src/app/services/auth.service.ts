import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;  // Simulação de estado de autenticação

  // Simula a verificação de login
  isAuthenticated(): boolean {
    return this.loggedIn;
  }

  // Simula um login
  login() {
    this.loggedIn = true;
  }

  // Simula um logout
  logout() {
    this.loggedIn = false;
  }
}
