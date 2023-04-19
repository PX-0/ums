import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { OnDestroyHandler } from 'src/app/core/abstractions/ondestroy-handler';
import { AuthService } from 'src/app/core/services/auth.service';
import { Credentials } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends OnDestroyHandler {

  notFound!:boolean;

  constructor(private readonly auth:AuthService,private readonly router:Router){
    super()
    this.auth.loggedIn.pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (value: boolean) => {
        this.notFound = !value;
      }
    });
  }

  loginForm:FormGroup = new FormGroup({
    email:new FormControl<string>('',{nonNullable:true,validators:[Validators.email,Validators.required]}),
    password:new FormControl<string>('',{nonNullable:true,validators:[Validators.minLength(5),Validators.required]})
  })

  onSubmitHandler(){
    if(this.loginForm.valid){
      const{password,email} = this.loginForm.value as Pick<Credentials,'email'|'password'>
      this.auth.login(email,password);
      if(!this.notFound){
        this.router.navigateByUrl('/');
      }
    }
    
  }
  

}
