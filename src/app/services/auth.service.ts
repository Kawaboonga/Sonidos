/*import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUser: any = null;

  login(email: string, password: string): boolean {
    if (email === 'admin@site.com' && password === 'Admin123!') {
      this.currentUser = { email, role: 'admin' };
      return true;
    } else if (email === 'user@site.com' && password === 'User123!') {
      this.currentUser = { email, role: 'user' };
      return true;
    }
    return false;
  }

  logout() { this.currentUser = null; }

  getRole() { return this.currentUser?.role || null; }

  isAuthenticated() { return !!this.currentUser; }
}*/

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private router: Router) {}

  // Simula inicio de sesión comparando con datos de localStorage
  login(email: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  // Obtiene usuario actual desde localStorage
  getCurrentUser(): any {
    return JSON.parse(localStorage.getItem('currentUser') || 'null');
  }

  // Verifica si hay un usuario logueado
  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  // Verifica si el usuario tiene el rol requerido
  hasRole(role: string): boolean {
    const user = this.getCurrentUser();
    return user && user.role === role;
  }

  // Cierra sesión
  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
