import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../Services/message.service';

@Component({
    moduleId: module.id,
    selector: 'message',
    template: `<div *ngIf="message" [ngClass]="{ 'alert': message, 'alert-success': message.type === 'success', 
                'alert-danger': message.type === 'error' }">{{message.text}}</div>`
})
export class MessageComponent {
    message: any;
    constructor(private _msgService: MessageService) { }

    ngOnInit() {
        this._msgService.getMessage().subscribe(message => { this.message = message; });
    }
}
