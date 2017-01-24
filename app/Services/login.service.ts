import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class LoginService {
  private loggedIn = false;

  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }
  getUserName()
  {
    return JSON.parse(localStorage.getItem('auth_token')).firstName;
  }
  getUserId()
  {
    return JSON.parse(localStorage.getItem('auth_token')).id;
  }

  login(email, password) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
   
    return this.http
      .post(
        '/api/authenticate', 
        JSON.stringify({ username: email, password: password }))
      .map(res => {
        let User = res.json();
        if (User && User.auth_token) {
           console.log('success');
          localStorage.setItem('auth_token', JSON.stringify(User));
          this.loggedIn = true;
         
        }
      });
  }
  
  logout() {
    localStorage.removeItem('auth_token');
    //this.loggedIn = false;
  }

  isLoggedIn() {
    return localStorage.getItem('auth_token');
  }
}