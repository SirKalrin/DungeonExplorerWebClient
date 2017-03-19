import {Component, OnInit, Output} from '@angular/core';
import {User} from './User';
import {forEach} from "@angular/router/src/utils/collection";
import {UsersService} from "./users.service";
import {EventEmitter} from "@angular/common/src/facade/async";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  users: Observable<User[]>;

  @Output()
  create = new EventEmitter();

  constructor(private userService: UsersService, private router: Router) {

      this.users = userService.getUsers();

  }

  ngOnInit() {
  }

  createUser()
  {
    //dumb
    this.create.emit();
    //smart
    this.router.navigate(['/users/create-user']);
  }


  deleteUser(user: User)
  {
    this.userService.deleteUser(user);
  }

  updateUser(user: User)
  {
    this.router.navigate(["/users/" + user.$key])
  }



}
