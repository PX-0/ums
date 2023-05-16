import { Component, OnInit } from '@angular/core';
import { lastValueFrom, of, switchMap } from 'rxjs';
import { UsersService } from 'src/app/core/services/users.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {


  constructor(private readonly usersService:UsersService){}

  users:User[] = []

  userById:any;

  loading:boolean = false;

  async ngOnInit() {
    this.loading= true;
    await this.getUsers();
    await this.getUserById();    
    this.loading = false;
    
  }


  async getUsers(){
    this.users = await lastValueFrom(this.usersService.getAllUsers().pipe(switchMap((value=>of(value.data)))));
  }

  async getUserById(){
    const id = this.users[0].id
    this.userById = await lastValueFrom(this.usersService.getUserById(id).pipe(switchMap((value=>of(value.data)))));
  }



}
