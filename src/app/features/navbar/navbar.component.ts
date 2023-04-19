import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { OnDestroyHandler } from 'src/app/core/abstractions/ondestroy-handler';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent extends OnDestroyHandler {
  userIsLogged!: boolean;

  username!: string | null;

  constructor(private router: Router, private readonly auth: AuthService) {
    super()
    this.auth.loggedIn.pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (value: boolean) => {
        this.userIsLogged = value;
        const user = localStorage.getItem('user');
        const userObj = !!user ? JSON.parse(user) : null;
        this.username = !!userObj ? userObj.user_name : null;
      },
    });
  }

  logoutHandler() {
    this.auth.logout();
  }
}
