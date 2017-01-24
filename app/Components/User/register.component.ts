import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';
import { MessageService } from '../../Services/message.service';
import { User } from '../../Models/user.model';
import { Address } from '../../Models/address.model';
import { COUNTRIES } from '../../Models/countries';
@Component({
    moduleId: module.id,
    selector: 'Register',
    templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
    model: User;
    countries: any[];
    IsLoading = false;
    constructor(private router: Router,
        private _userService: UserService,
        private _messageService : MessageService) { 
            this.model = new User(new Address());    
            
        }

    ngOnInit() {this.countries = COUNTRIES;      }
    register(){
        this.IsLoading = true;
        this._userService.create(this.model)
        .subscribe(
            data =>
            {                
                this._messageService.success('Registered Successfully. Please LogIn to Continue.',true);
            },
            error => {
                this._messageService.error(error);
                this.IsLoading = false;
            }
        );
    }
}