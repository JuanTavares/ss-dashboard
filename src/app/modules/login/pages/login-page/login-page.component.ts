import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLImageElement>;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.emailInput.nativeElement.focus();
  }

  login() {
    this.router.navigate(['dashboard']);
  }

}
