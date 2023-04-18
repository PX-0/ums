import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, lastValueFrom, takeUntil } from 'rxjs';
import { OnDestroyHandler } from 'src/app/core/abstractions/ondestroy-handler';
import { AuthService } from 'src/app/core/services/auth.service';
import { UsersService } from 'src/app/core/services/users.service';
import { User, UsersObj } from 'src/app/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent extends OnDestroyHandler implements OnInit {
  selectedUser!: User;

  Users$!: UsersObj;

  UsersDump!: UsersObj;

  cols: string[] = [];

  showModal: boolean = false;

  constructor(private readonly usersService: UsersService,private auth:AuthService) {
    super();
  }

  ngOnInit(): void {
    lastValueFrom(this.usersService.getAllUsers()).then((value) => {
      this.Users$ = value;
      this.UsersDump = this.Users$;
    });
  }

  setShowModal() {
    this.showModal = !this.showModal;
  }

  onClickHandler(objToHandle: any): void {
    switch (objToHandle.mode) {
      case 'edit':
        this.setShowModal();
        this.selectedUser = objToHandle.obj;
        break;

      case 'delete':
        this.deleteSelectedUser(objToHandle.obj);
        break;
    }
  }

  deleteSelectedUser(user: User) {
    const confirm = window.confirm('Are you sure to proceed ?');
    const proceed = confirm ? true : false;

    if (proceed) {
      // this.usersService.deleteUserById(user.id);
      const indexUserToRemove = this.UsersDump.data.findIndex((user) => user.id === user.id);
      this.UsersDump.data.splice(indexUserToRemove, 1);
    }
  }

  onSaveEditHandler(formValue: any) {
    //effettivo update
    this.setShowModal();
    this.usersService.updateUserById(formValue.id, formValue);

    //fake update per aggiornare la pagina
    const indexOldUser = this.UsersDump.data.findIndex((user) => user.id === formValue.id);
    this.UsersDump.data.splice(indexOldUser, 1);
    this.UsersDump.data.push(formValue);
    this.UsersDump.data.sort((user1, user2) => user1.id - user2.id);
  }
}
