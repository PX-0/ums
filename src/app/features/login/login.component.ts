import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Credentials } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private readonly auth:AuthService,private readonly router:Router){}

  loginForm:FormGroup = new FormGroup({
    email:new FormControl<string>('',{nonNullable:true,validators:[Validators.email,Validators.required]}),
    password:new FormControl<string>('',{nonNullable:true,validators:[Validators.minLength(5),Validators.required]})
  })

  onSubmitHandler(){
    if(this.loginForm.valid){
      const{password,email} = this.loginForm.value as Pick<Credentials,'email'|'password'>
      this.auth.login(email,password);
      if(this.auth.isUserLoggedIn()){
        this.router.navigateByUrl('/');
      }
    }
    
  }
  

}
