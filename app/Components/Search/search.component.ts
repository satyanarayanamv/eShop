import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../Services/products.service';

@Component({
    moduleId: module.id,
    selector: 'search-component',
    templateUrl: 'search.component.html'
})
export class SearchComponent implements OnInit {
    @Input("searchtype") searchtype: any ;
    searchFilter: string = "";
    constructor(private _productService: ProductService) {
    }
    private searchUsers()
    {
        this._productService.search(this.searchFilter);
    }
    private clear()
    {
        this._productService.clear();
        this.searchFilter="";
    }
    ngOnInit() { }
}