import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth-guard';

const routes: Routes = [
  {path:'',redirectTo:'homepage',pathMatch:'full'},
  {
    path: 'homepage',
    loadChildren: () => import('./features/homepage/homepage.module').then((m) => m.HomepageModule),
  },
  {
    path: 'new-user',
    loadChildren: () => import('./features/user-detail/user-detail.module').then((m) => m.UserDetailModule),canActivate:[AuthGuard]
  },
  {
    path: 'users',
    loadChildren: () => import('./features/users/users.module').then((m) => m.UsersModule),canActivate:[AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./features/login/login.module').then((m) => m.LoginModule),
  },
  {
    path:'dropdown',
    loadChildren:()=> import('./features/dropdown/dropdown.module').then((m)=>m.DropdownModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
