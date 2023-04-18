import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  userIsLogged!: boolean;

  username!: string;

  constructor(private router: Router, private readonly auth: AuthService) {
    this.auth.loggedIn
    .subscribe({
      next: (value: boolean) => {
        this.userIsLogged = value;
        const user = localStorage.getItem('user');
        const userObj = !!user ? JSON.parse(user) : null;
        this.username = !!userObj.user_name ? userObj.user_name : null;
      },
    });
  }

  logoutHandler() {
    this.auth.logout();
  }
}
