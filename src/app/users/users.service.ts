import { Injectable } from '@angular/core';
import {User} from "./user";
import {Router} from "@angular/router";
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs";

@Injectable()
export class UsersService {

  constructor(private router: Router, private af : AngularFire) {

    /*[{id: '0', name: "Ole", age: 12, email: "Retard@live.org", password: "1234"},
    {id: '1', name: "Frans", age: 32, email: "Retard7@live.org", password: "1234"},
    {id: '2', name: "Biver", age: 62, email: "Retard2@live.org", password: "1234"},
    {id: '3', name: "Helmut", age: 13, email: "Retard3@live.org", password: "1234"},
    {id: '4', name: "Ubruli", age: 23, email: "Retard4@live.org", password: "1234"},
    {id: '5', name: "IziPizi", age: 99, email: "Retard5@live.org", password: "1234"},
    {id: '6', name: "Paul", age: 11, email: "Retard6@live.org", password: "1234"}];*/
  }

  getUsers(){
   return this.af.database.list('/users');
  }

  getUser(id: string) : Observable<User>{
    return this.af.database.object('users/' + id);
  }

  addUser(user: User){
    this.af.database.list('/users').push(user).key;
  }

  deleteUser(user: User){
    this.af.database.list('/users').remove(user.$key);
  }

  updateUser(user: User){
    this.af.database.list('/users').update(user.$key, user);
  }
}
