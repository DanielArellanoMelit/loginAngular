import { Component, ElementRef, ViewChild } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { AccountService } from '../account/account.service';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

export const KEY_FIRST_LOAD = 'FIRST_LOAD';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('username', { static: false })
  username!: ElementRef;

  authenticationError = false;
  rememberMe = true;

  loggedIn?: boolean;

  loginForm = this.fb.group({
    username: [null, [Validators.required]],
    password: [null, [Validators.required]],
    rememberMe: [false],
  });



  private accessToken = '';

  constructor(
    protected sessionStorageService: SessionStorageService,
    private accountService: AccountService,
    private loginService: LoginService,
    private router: Router,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    // if already authenticated then navigate to home page
    this.accountService.identity().subscribe(() => {
      if (this.accountService.isAuthenticated()) {
        this.router.navigate(['']);
      }
    });
  }

  ngAfterViewInit(): void {
    this.username.nativeElement.focus();
  }

  login(): void {
    this.loginService
      .login({
        username: this.loginForm.get('username')!.value ?? "",
        password: this.loginForm.get('password')!.value ?? "",
        rememberMe: true,
      })
      .subscribe({
        next: () => {
          this.loginSuccess();
        },
        error: () => (this.authenticationError = true),
      });
  }

  private loginSuccess(): void {
    this.authenticationError = false;
    if (!this.router.getCurrentNavigation()) {
      this.sessionStorageService.store(KEY_FIRST_LOAD, true);
      this.router.navigate(['']);
    }
  }
}

