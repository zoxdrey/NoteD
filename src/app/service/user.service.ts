import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  private usersUrl: string;
  receivedUser: User;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/api/getusers';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }

  public getUser(){
    return this.http.get(this.usersUrl);
  }

  public getUserPost(){
    return this.http.post(this.usersUrl, this.receivedUser);
  }
}
