import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../Services/products.service';
import 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'product',
    providers: [ProductService],
    templateUrl: 'product.component.html',
    styleUrls : ['catalog.component.css'],    
})
export class ProductComponent implements OnInit {
    product: any;
    constructor(private aroute: ActivatedRoute,
        private _productService: ProductService) { }

    ngOnInit() {
        this.aroute.params.subscribe((params) => {
            let productId = params['id'];
            this._productService.getProduct(productId).subscribe(products => {
                this.product = JSON.parse(products[0]);
            });
        });
    }
}
