import {Injectable, EventEmitter} from '@angular/core';
import {ProductModel} from '../Models/product.model';
import {ProductGenerator} from './product.generator';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class ProductService {
    products: any[] = [];
    serviceEvent$: EventEmitter<ProductModel[]> = new EventEmitter();

    constructor() {
        if(this.products.length == 0)
            this.products = ProductGenerator.getProducts();        
    }
    getProducts(): Observable<any> {
        return Observable.of(this.products);
    }
    getProduct(productId): Observable<any> {
        return Observable.of(this.products.filter((product)=> product.id == productId).map( o => JSON.stringify(o)));
    }
    filter(filters: string[]): void {        
        if (filters.length === 0) {
            this.serviceEvent$.emit(this.products);
        }
        else {
            this.serviceEvent$.emit(this.products.filter((product)=> {
                let productHasAllFilters = true;
                filters.forEach((feature)=> {
                    if (product.filters.indexOf(feature) > -1 && productHasAllFilters === true) {
                        productHasAllFilters = true;
                    } else {
                        productHasAllFilters = false;
                    }
                });
                return productHasAllFilters;
            }));
        }
    }
    search(searchFilter : string){
        if (searchFilter.length === 0) {
            this.serviceEvent$.emit(this.products);
        }
        else {
            this.serviceEvent$.emit(this.products.filter((item) => {
            return item.name.toLowerCase().indexOf(searchFilter.toLowerCase()) > -1;
        }));
        }
    }
    clear() {
        this.serviceEvent$.emit(this.products);
    }
}
