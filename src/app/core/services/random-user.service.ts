import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API = 'https://randomuser.me/api/?';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(
    private http: HttpClient
  ) { }

  getHundredUsers() {
    return this.http
      .get(API + 'results=101&inc=name,gender,email,picture,dob&noinfo&seed=ssdashboard');
  }

  getList() {
    return this.http
      .get('https://randomapi.com/api/do1zgi4d?key=LA2T-HR42-B5CQ-E4O6&results=10&fmt=raw');
  }
}
