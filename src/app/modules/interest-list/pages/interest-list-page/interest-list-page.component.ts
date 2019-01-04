import { Component, OnInit } from '@angular/core';

import { RandomUserService } from 'src/app/core/services/random-user.service';
import { Interest } from 'src/app/shared/models/interest';

@Component({
  selector: 'app-interest-list-page',
  templateUrl: './interest-list-page.component.html',
  styleUrls: ['./interest-list-page.component.css']
})
export class InterestListPageComponent implements OnInit {

  users: Interest[] = [];

  constructor(private randomUserService: RandomUserService) { }

  ngOnInit() {
    this.randomUserService.getList()
      .subscribe((dados: Interest[]) => {
        this.users = dados;
      });
  }

}
