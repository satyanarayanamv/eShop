import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { User } from '../Models/user.model';
import { Address } from '../Models/address.model';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {
   cartUpdated$: EventEmitter<number> = new EventEmitter();
    constructor(private http: Http) {
           let address: Address;
        this.user = new User(new Address());
     }
    user: User;
    getAll() {
        return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    addToCart(productId: number, userId: number) {
     
        this.getById(userId)
            .subscribe((res) => {
                this.user = <User>(res);
                if(!this.user.cartItems)
                    this.user.cartItems = [];
                this.user.cartItems.push(productId);
                this.update(this.user);
                this.cartUpdated$.emit(this.user.cartItems.length);
            }
            );
    }
    // private helper methods
    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('auth_token'));
        if (currentUser && currentUser.auth_token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.auth_token });
            return new RequestOptions({ headers: headers });
        }
    }
}