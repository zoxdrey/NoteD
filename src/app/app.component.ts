import {Component} from '@angular/core';
import {UserServiceService} from './service/user-service.service';
import {User} from './model/user';
import {Article} from './model/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NoteDFront';
  login: string;
  password: string;

  users: User[];
  articles: Article[];

  constructor(private userservice: UserServiceService) {
  }

  getAllUsers() {
    this.userservice.getUsers().subscribe((data: User[]) => {
      this.users = data;
      console.log(data);
      console.log(this.users);
    });
  }

  addUser() {
    this.userservice.addUser(new User(this.login, this.password)).subscribe((data: string) => {
        console.log(data);
      }
    );
  }
}
