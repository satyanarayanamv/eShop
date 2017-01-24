import { Component, OnInit, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { MessageService } from '../../Services/message.service';
@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html'
})
export class LogInComponent implements AfterViewInit {
    model: any = {};
    IsLoading = false;
    returnUrl: string;
    @ViewChild('myModal')
    modal: ModalComponent;
    constructor(private _loginService: LoginService, private router: Router, private _messageService: MessageService) { }
    login() {
        this.IsLoading = true;
        this._loginService.login(this.model.username, this.model.password)
            .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this._messageService.error(error);
                this.IsLoading = false;
            });

    }
    ngAfterViewInit() {
        this.modal.open();

    }
    dismissed() {
        this.router.navigate(['/']);
    }
}