import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { UsersService } from 'src/app/core/services/users.service';
import { User, UsersObj } from 'src/app/models/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {

  demo_user!: User;

  constructor(private readonly http: UsersService, private readonly router: Router) {}
  ngOnInit(): void {
    this.http.getAllUsers()
    .pipe(switchMap((value:UsersObj)=>of(value.data.sort((user1,user2)=>user1.id-user2.id).pop())))
    .subscribe({next:(value)=>{if(!!value){this.demo_user = { age: 18, country: '', email: '', fiscalcode: '', id: (value.id+1), lastname: '', login: '', name: '', phone: '', province: '' }}
    }})    
  }

   

  onCloseHandler() {
    this.router.navigateByUrl('/homepage');
  }

  onSaveHandler(formValue: any) {
    this.http.addUser(formValue);
    this.router.navigateByUrl('/homepage');
  }
}
