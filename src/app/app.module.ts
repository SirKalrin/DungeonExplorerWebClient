import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import {MaterialModule} from "@angular/material";
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component'
import {Routes, RouterModule} from "@angular/router";
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './auth/login/login.component';
import { LoginViewComponent } from './auth/login/login-view.component';

import {UsersService} from "./users/users.service";
import {AuthService} from "./auth/auth.service";
import { CreateUserComponent } from './users/create-user/create-user.component';
import { CreateUserViewComponent } from './users/create-user/create-user-view.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { UpdateUserViewComponent } from './users/update-user/update-user-view.component';
import { AngularFireModule, AuthMethods, AuthProviders} from 'angularfire2';
import { TopicsComponent } from './topics/topics.component';

export const firebaseConfig = {
  apiKey: "AIzaSyAKbOHrqxYqH6b7yiMV-r01ovUG9J3We80",
  authDomain: "vr-restapi.firebaseapp.com",
  databaseURL: "https://vr-restapi.firebaseio.com",
  storageBucket: "vr-restapi.appspot.com",
  messagingSenderId: "1071965490238"
};

export const firebarebaseLoginConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path:'topics', component: TopicsComponent},
  { path: 'users', component: UsersComponent},
  { path: 'create-user', component: CreateUserComponent},
  { path: 'users/:$key', component: UpdateUserComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ToolbarComponent,
    HomeComponent,
    LoginComponent,
    LoginViewComponent,
    CreateUserComponent,
    CreateUserViewComponent,
    UpdateUserComponent,
    UpdateUserViewComponent,
    TopicsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Angular2FontawesomeModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig, firebarebaseLoginConfig)
  ],
  providers: [UsersService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
