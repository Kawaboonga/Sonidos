import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-style-one',
  templateUrl: './navbar-style-one.component.html',
  styleUrls: ['./navbar-style-one.component.scss']
})
export class NavbarStyleOneComponent implements OnInit {
  userName: string = 'Visitante';
  isLoggedIn: boolean = false;

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (user) {
      this.userName = user.firstName || user.email;
      this.isLoggedIn = true;
    }
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.userName = 'Visitante';
    this.isLoggedIn = false;
  }
}
