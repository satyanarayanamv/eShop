import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'address',
    templateUrl: 'address.component.html'
})
export class AddressComponent implements OnInit {
     @Input('group')
    public adressForm: FormGroup;
    constructor() { }

    ngOnInit() { }
}