import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormUserService } from 'src/app/core/services/form-user.service';
import { FormUser } from 'src/app/models/form-user';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
})
export class FormUserComponent implements OnChanges,OnInit {
  @Output() onCloseEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSaveEditEvent: EventEmitter<any> = new EventEmitter<any>();

  @Input() user!: User;
  @Input() EditUserMode!: boolean;

  formUser!:FormGroup<FormUser>;

  regExLogin: RegExp = /^([a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*)|([_.@A-Za-z0-9-]+)$/;

  constructor(private readonly formUserService:FormUserService){}

  ngOnInit(): void {
    this.formUserService.getForm(this.user,this.EditUserMode);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user']?.currentValue) {
      this.formUser= this.formUserService.getForm(changes['user']?.currentValue,this.EditUserMode);
    }
  }

  onSaveHandler() {
      const { age, country, email, fiscalcode, lastname, login, name, phone, province, id } = this.formUser.value as Pick<
      User,
      'id' | 'age' | 'country' | 'email' | 'fiscalcode' | 'lastname' | 'login' | 'name' | 'phone' | 'province' | 'id'
    >;

    const data: User = {
      age: age,
      country: country,
      email: email,
      fiscalcode: fiscalcode,
      id: this.EditUserMode ? this.user.id : id,
      lastname: lastname,
      login: login,
      name: name,
      phone: phone,
      province: province,
    };
    this.onSaveEditEvent.emit(data);
    
  }

  onCloseHandler() {
    this.onCloseEvent.emit();
  }
}
