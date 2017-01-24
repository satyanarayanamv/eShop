import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { LoginService } from '../../Services/login.service';
import { MessageService } from '../../Services/message.service';
import {User } from '../../Models/user.model';
import {Address } from '../../Models/address.model';
import { COUNTRIES } from '../../Models/countries';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html',
    styles:[`.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 24px;
  margin-bottom : 0px;
}

.switch input {display:none;}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}`]
})
export class ProfileComponent implements OnInit {

    model : User ;
    changePwd : any = {};
    address : Address;
    userId : number;
    isChangePwd :  boolean = false;
       countries: any[];
    constructor(private _userService : UserService, private _loginService : LoginService, private _messageService : MessageService) {
        this.model=new User(new Address);
        this.countries = COUNTRIES; 
        this.userId = this._loginService.getUserId();     
         }
changed(event : Event){
    console.log('change' + event);
}
    ngOnInit() { 
           
        this._userService.getById(this.userId).subscribe(users => {this.model=users;});
    }
    update(){
        if(this.changePwd.curpassword == this.model.password)
            this.model.password = this.changePwd.newpassword;
        if(this._userService.update(this.model))
            this._messageService.success("Profile Changes were updated successfully.");
        
    }
}