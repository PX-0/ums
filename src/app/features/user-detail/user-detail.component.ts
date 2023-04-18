import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent {
  constructor(private readonly http: UsersService, private readonly router: Router) {}

  demo_user: User = { age: 18, country: '', email: '', fiscalcode: '', id: 0, lastname: '', login: '', name: '', phone: '', province: '' };

  onCloseHandler() {
    this.router.navigateByUrl('/homepage');
  }

  onSaveHandler(formValue: any) {
    this.http.addUser(formValue);
    this.router.navigateByUrl('/homepage');
  }
}
