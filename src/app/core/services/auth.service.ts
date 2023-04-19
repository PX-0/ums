import { EventEmitter, Injectable, Output } from '@angular/core';
import { UsersService } from './users.service';
import { LoginObj } from 'src/app/models/user';
import { lastValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  @Output() loggedIn = new EventEmitter<boolean>();



  constructor(private readonly http: UsersService) {}

  login(email: string, password: string): void {
   lastValueFrom(this.http.loginUser(email,password)).then(value=>{localStorage.setItem('user',JSON.stringify(value));this.loggedIn.emit(this.isUserLoggedIn())})
  }
    
  

  isUserLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  logout():void{
    localStorage.removeItem('user');
    this.loggedIn.emit(this.isUserLoggedIn())
  }
}
