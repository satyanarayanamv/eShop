import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private _loginService: LoginService, private router : Router) {}

  canActivate() {
     if (localStorage.getItem('auth_token')) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.routerState.snapshot.url }});
        return false;
  }
}