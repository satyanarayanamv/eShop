"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.loggedIn = false;
        this.loggedIn = !!localStorage.getItem('auth_token');
    }
    LoginService.prototype.getUserName = function () {
        return JSON.parse(localStorage.getItem('auth_token')).firstName;
    };
    LoginService.prototype.getUserId = function () {
        return JSON.parse(localStorage.getItem('auth_token')).id;
    };
    LoginService.prototype.login = function (email, password) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post('/api/authenticate', JSON.stringify({ username: email, password: password }))
            .map(function (res) {
            var User = res.json();
            if (User && User.auth_token) {
                console.log('success');
                localStorage.setItem('auth_token', JSON.stringify(User));
                _this.loggedIn = true;
            }
        });
    };
    LoginService.prototype.logout = function () {
        localStorage.removeItem('auth_token');
        //this.loggedIn = false;
    };
    LoginService.prototype.isLoggedIn = function () {
        return localStorage.getItem('auth_token');
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map