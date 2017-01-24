import { Component, OnInit, EventEmitter } from '@angular/core';
import { ProductService } from '../../Services/products.service';
import { ProductModel } from '../../Models/product.model';
import { UserService } from '../../Services/user.service';
import { LoginService } from '../../Services/login.service';
import { SortPipe } from '../../Pipes/sort.pipe';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'catalog.component.html',
    styleUrls: ['catalog.component.css']

})

export class CatalogComponent implements OnInit {
    products: ProductModel[] = [];
    productCount: number = 0;
    isDetailsView: boolean = false;
    private subscriber: EventEmitter<ProductModel[]>;
    sortItems = [
        new SortItem('addedDate', 'Newest Arrivals'),
        new SortItem('price', 'Price: Low to High'),
        new SortItem('-price', 'Price: High to Low'),
        new SortItem('-rating', 'Avg. Customer Review')
    ];
    selectedSortItem: any = this.sortItems[0];
    constructor(private _productsservice: ProductService, private _router: Router,
        private _userService: UserService, private _loginService: LoginService) {

    }
    toggle(isDetailsView) {
        this.isDetailsView = isDetailsView;
    }
    private loadProducts(products: ProductModel[]) {
        this.productCount = products.length;
        this.products = products.slice(0, 20);
    }
    ngOnInit() {
        this.subscriber = this._productsservice.serviceEvent$.subscribe((products: ProductModel[]) => {
            this.loadProducts(products);
        });
        this._productsservice.getProducts().subscribe((products) => {
            this.loadProducts(products);
        }, error => {
            console.error("Error in Getting Products List", error);
        });
    }
    showProduct(product) {
        this._router.navigate(['/product', product.id]);
    }
    addToCart(productId: number) {
        if (!this._loginService.isLoggedIn())
            this._router.navigate(['/login'], { queryParams: { returnUrl: this._router.routerState.snapshot.url } });
        else {
            let userId = this._loginService.getUserId();
            this._userService.addToCart(productId, userId);
        }

    }
}

export class SortItem {
    constructor(public id: String, public name: string) { }
}