import { CanActivateFn } from '@angular/router';
import { AuthService } from '..services/authService';  // Caminho atualizado


export const authGuard: CanActivateFn = (route, state) => {
  return true;
};
