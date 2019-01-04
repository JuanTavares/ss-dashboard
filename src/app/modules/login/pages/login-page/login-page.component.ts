import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StorageService } from 'src/app/core/services/storage.service';

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
    private formBuilder: FormBuilder,
    private storage: StorageService
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.emailInput.nativeElement.focus();
  }

  login() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;

    this.storage.salvarLocal(email, password);
    this.router.navigate(['dashboard/graphic']);
  }

}
