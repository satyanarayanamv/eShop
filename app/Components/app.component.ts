import { Component } from '@angular/core';
import {NavComponent} from './Nav/nav.component';

@Component({
    moduleId : module.id,
    selector : 'my-app', 
    template : `<div class="container">
                <nav-menu></nav-menu>                
                <router-outlet></router-outlet>
                </div>
                `     
})
export class AppComponent {

}