import { EventEmitter, Injectable, Output } from '@angular/core';
import { UsersService } from './users.service';
import { LoginObj } from 'src/app/models/user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  @Output() loggedIn = new EventEmitter<boolean>();



  constructor(private readonly http: UsersService) {}

  login(email: string, password: string): void {
    this.http.loginUser(email, password).subscribe((user: LoginObj) => {
      localStorage.setItem('user',JSON.stringify(user))
      this.loggedIn.emit(this.isUserLoggedIn());
    });
  }

  isUserLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  logout():void{
    localStorage.removeItem('user');
    this.loggedIn.emit(this.isUserLoggedIn())
  }
}
