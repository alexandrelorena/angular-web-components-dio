import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  
  constructor(){}
  ngOnInit(): void {
    logar();{
      alert("Login realizado com sucesso");
    }
  }

}
function logar() {
  throw new Error('Function not implemented.');
}
import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../../service';  // Exemplo de injeção de serviço

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  return authService.isAuthenticated();  // Retorna true se autenticado
};

// Versão funcional simplificada, diretamente injetando dependências usando o `inject`.

