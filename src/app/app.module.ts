import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthDBInterceptor } from './core/interceptor/httpservice-interceptor';
import { NullValuePipeModule } from './core/pipe/null-value.pipe.module';
import { UsersComponent } from './features/users/users.component';
import { TableComponent } from './shared/components/table/table.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDetailComponent } from './features/user-detail/user-detail.component';
import { NavbarComponent } from './features/navbar/navbar.component';
import { HomepageComponent } from './features/homepage/homepage.component';
import { LoginComponent } from './features/login/login.component';
import { FormUserComponent } from './shared/components/form-user/form-user.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    TableComponent,
    ModalComponent,
    UserDetailComponent,
    NavbarComponent,
    HomepageComponent,
    LoginComponent,
    FormUserComponent
  ],
  imports: [
    ReactiveFormsModule,
    NullValuePipeModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthDBInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
