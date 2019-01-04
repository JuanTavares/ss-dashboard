import { Component, OnInit } from '@angular/core';

import { RandomUserService } from 'src/app/core/services/random-user.service';
import { Users } from 'src/app/core/models/users';
import { Random } from 'src/app/core/models/random';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  users: Users[] = [];
  selectedUser: Users;

  constructor(private randomUser: RandomUserService) { }

  ngOnInit() {
    this.randomUser.getHundredUsers()
      .subscribe((dados: Random) => {
        dados.results.map((user) => {
          this.users.push(user);
        });
      });
  }
  }

}
