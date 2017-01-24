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
var user_service_1 = require("../../Services/user.service");
var login_service_1 = require("../../Services/login.service");
var message_service_1 = require("../../Services/message.service");
var user_model_1 = require("../../Models/user.model");
var address_model_1 = require("../../Models/address.model");
var countries_1 = require("../../Models/countries");
var ProfileComponent = (function () {
    function ProfileComponent(_userService, _loginService, _messageService) {
        this._userService = _userService;
        this._loginService = _loginService;
        this._messageService = _messageService;
        this.changePwd = {};
        this.isChangePwd = false;
        this.model = new user_model_1.User(new address_model_1.Address);
        this.countries = countries_1.COUNTRIES;
        this.userId = this._loginService.getUserId();
    }
    ProfileComponent.prototype.changed = function (event) {
        console.log('change' + event);
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getById(this.userId).subscribe(function (users) { _this.model = users; });
    };
    ProfileComponent.prototype.update = function () {
        if (this.changePwd.curpassword == this.model.password)
            this.model.password = this.changePwd.newpassword;
        if (this._userService.update(this.model))
            this._messageService.success("Profile Changes were updated successfully.");
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'profile',
        templateUrl: 'profile.component.html',
        styles: [".switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 24px;\n  margin-bottom : 0px;\n}\n\n.switch input {display:none;}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 18px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196F3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}"]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, login_service_1.LoginService, message_service_1.MessageService])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map