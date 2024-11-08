import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)

  if(!authService.isAuthenticateUser()){
    alert('Boss! You are not authorized to this view page. Plese login')
    router.navigate(['/login'])
    return false
  }
  return true;
};
