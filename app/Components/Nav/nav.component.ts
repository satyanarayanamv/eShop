import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../Services/login.service';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: "nav-menu",
    templateUrl: "nav.component.html",
    styles: [`   .nav-a-2{
    padding: 0 0 0 10px;
    line-height: 44px;
    height: 44px;}
    .nav-line-2{
        float: left;
    clear: both;
    padding-right: 11px;
    }
    .nav-line-1{
    height: 16px;
    float: left;
    }
    .material-icons.md-48 { font-size: 48px; }
    .material-icons.md-32 { font-size: 32px; }
    .material-icons.orange600 { color: #FB8C00; }
    .notification{
            position: absolute;
    right: 25px;
    top: -16px;
    padding: 2px 3px;
    border-radius: 2px;
    background: #fe6363;
    color: #fff;
    font-size: 10px;
    font-weight: 500;
    }`]
})

export class NavComponent implements OnInit {
    cartItemCount: number = 0;
    constructor(private _loginService: LoginService, private router: Router, private _userService: UserService) {
        this._userService.cartUpdated$.subscribe(item => this.cartItemCount=item);
    }

    ngOnInit() {
       if (this._loginService.isLoggedIn()) {
            let userId = this._loginService.getUserId();
            this._userService.getById(userId).subscribe(users => {
                if (users.cartItems)
                    return this.cartItemCount = users.cartItems.length;
                else
                    return 0;
            });
        }    
    }   

    private LogOut() {
        this._loginService.logout();
        this.router.navigate(['']);
    }

}