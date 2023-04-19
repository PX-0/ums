import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormUser } from 'src/app/models/form-user';
import { User } from 'src/app/models/user';

@Injectable({ providedIn: 'root' })
export class FormUserService {
    
  private regExLogin: RegExp = /^([a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*)|([_.@A-Za-z0-9-]+)$/;

  getForm(user: User): FormGroup<FormUser> {
    return new FormGroup<FormUser>({
      age: new FormControl<number>(user.age, { nonNullable: true }),
      country: new FormControl<string>(user.country, { nonNullable: true }),
      email: new FormControl<string>(user.email, { nonNullable: true, validators: [Validators.email, Validators.required] }),
      fiscalcode: new FormControl<string>(user.fiscalcode, { nonNullable: true }),
      lastname: new FormControl<string>(user.lastname, { nonNullable: true }),
      login: new FormControl<string>(user.login, {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(5), Validators.pattern(this.regExLogin)],
      }),
      name: new FormControl<string>(user.name, { nonNullable: true }),
      province: new FormControl<string>(user.province, { nonNullable: true }),
      phone: new FormControl<string>(user.phone, { nonNullable: true }),
      id: new FormControl<number>( user.id , { nonNullable: true,validators:[Validators.required] }),
    });
  }
}
