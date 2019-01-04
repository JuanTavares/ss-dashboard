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
}
