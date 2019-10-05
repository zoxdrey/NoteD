import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  public user: User;
  private appUrl =  'http://localhost:8080/api/';


    constructor(private http: HttpClient) { }

  getUsers() {
    // now returns an Observable of Config
    return this.http.get<User[]>(this.appUrl + 'getusers');
  }
  addUser(user: User) {
    return this.http.post<string>(this.appUrl + 'create', user);
  }
}
