import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  isShown = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isShown = !this.isShown;
  }

}
