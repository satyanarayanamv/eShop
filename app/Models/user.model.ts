import { Address } from './address.model';
export class User { 

    constructor(address: Address) {
        this.address = address;
        this.cartItems = [];
    }
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    middleName: string;
    address: Address;
    cartItems : number[];
}