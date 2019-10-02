import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.css']
})
export class ExitComponent{

  users: User[];

  constructor(private userService: UserService) {

  }

  onSubmit() {
    this.userService.getUserPost().subscribe(data => {
      this.users = data

    });
  }


}
