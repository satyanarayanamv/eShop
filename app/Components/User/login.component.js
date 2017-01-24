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
var router_1 = require("@angular/router");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var message_service_1 = require("../../Services/message.service");
var LogInComponent = (function () {
    function LogInComponent(_loginService, router, _messageService) {
        this._loginService = _loginService;
        this.router = router;
        this._messageService = _messageService;
        this.model = {};
        this.IsLoading = false;
    }
    LogInComponent.prototype.login = function () {
        var _this = this;
        this.IsLoading = true;
        this._loginService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this._messageService.error(error);
            _this.IsLoading = false;
        });
    };
    LogInComponent.prototype.ngAfterViewInit = function () {
        this.modal.open();
    };
    LogInComponent.prototype.dismissed = function () {
        this.router.navigate(['/']);
    };
    return LogInComponent;
}());
__decorate([
    core_1.ViewChild('myModal'),
    __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
], LogInComponent.prototype, "modal", void 0);
LogInComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login',
        templateUrl: 'login.component.html'
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService, router_1.Router, message_service_1.MessageService])
], LogInComponent);
exports.LogInComponent = LogInComponent;
//# sourceMappingURL=login.component.js.map