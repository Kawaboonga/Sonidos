import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUser: any = null;

  login(email: string, password: string): boolean {
    // Simulación de usuarios hardcodeados
    if (email === 'admin@site.com' && password === 'Admin123!') {
      this.currentUser = { email, role: 'admin' };
      return true;
    } else if (email === 'user@site.com' && password === 'User123!' ) {
      this.currentUser = { email, role: 'user' };
      return true;
    }
    return false;
  }

  logout() { this.currentUser = null; }

  getRole() { return this.currentUser?.role || null; }
  isAuthenticated() { return !!this.currentUser; }
}