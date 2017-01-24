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
var login_service_1 = require("../../Services/login.service");
var user_service_1 = require("../../Services/user.service");
var router_1 = require("@angular/router");
var NavComponent = (function () {
    function NavComponent(_loginService, router, _userService) {
        var _this = this;
        this._loginService = _loginService;
        this.router = router;
        this._userService = _userService;
        this.cartItemCount = 0;
        this._userService.cartUpdated$.subscribe(function (item) { return _this.cartItemCount = item; });
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this._loginService.isLoggedIn()) {
            var userId = this._loginService.getUserId();
            this._userService.getById(userId).subscribe(function (users) {
                if (users.cartItems)
                    return _this.cartItemCount = users.cartItems.length;
                else
                    return 0;
            });
        }
    };
    NavComponent.prototype.LogOut = function () {
        this._loginService.logout();
        this.router.navigate(['']);
    };
    return NavComponent;
}());
NavComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "nav-menu",
        templateUrl: "nav.component.html",
        styles: ["   .nav-a-2{\n    padding: 0 0 0 10px;\n    line-height: 44px;\n    height: 44px;}\n    .nav-line-2{\n        float: left;\n    clear: both;\n    padding-right: 11px;\n    }\n    .nav-line-1{\n    height: 16px;\n    float: left;\n    }\n    .material-icons.md-48 { font-size: 48px; }\n    .material-icons.md-32 { font-size: 32px; }\n    .material-icons.orange600 { color: #FB8C00; }\n    .notification{\n            position: absolute;\n    right: 25px;\n    top: -16px;\n    padding: 2px 3px;\n    border-radius: 2px;\n    background: #fe6363;\n    color: #fff;\n    font-size: 10px;\n    font-weight: 500;\n    }"]
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService, router_1.Router, user_service_1.UserService])
], NavComponent);
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map