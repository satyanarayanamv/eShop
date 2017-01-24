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
var router_1 = require("@angular/router");
var user_service_1 = require("../../Services/user.service");
var message_service_1 = require("../../Services/message.service");
var user_model_1 = require("../../Models/user.model");
var address_model_1 = require("../../Models/address.model");
var countries_1 = require("../../Models/countries");
var RegisterComponent = (function () {
    function RegisterComponent(router, _userService, _messageService) {
        this.router = router;
        this._userService = _userService;
        this._messageService = _messageService;
        this.IsLoading = false;
        this.model = new user_model_1.User(new address_model_1.Address());
    }
    RegisterComponent.prototype.ngOnInit = function () { this.countries = countries_1.COUNTRIES; };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.IsLoading = true;
        this._userService.create(this.model)
            .subscribe(function (data) {
            _this._messageService.success('Registered Successfully. Please LogIn to Continue.', true);
        }, function (error) {
            _this._messageService.error(error);
            _this.IsLoading = false;
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'Register',
        templateUrl: 'register.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        user_service_1.UserService,
        message_service_1.MessageService])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map