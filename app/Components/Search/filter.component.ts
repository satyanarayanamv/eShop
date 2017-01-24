import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { ProductService } from '../../Services/products.service';
import { ProductModel } from "../../Models/product.model";

@Component({
    selector: 'filter-component',
    template: `  
            <a href="#" style="color: inherit;" data-toggle="tooltip" title="Filter Products">  
              <i class="material-icons md-48 visible-xs visible-sm orange600" data-toggle="collapse" data-target="#filter">
              filter_list</i>
              </a>
    <div class="hidden-xs hidden-sm col-md-2" id="filter">
        <div class="row" *ngFor="let displayFilter of displayFilters">
            <div class="col-md-12">
                <div class="checkbox" [class.disabled]="displayFilter.disabled">
                  <label>
                    <input type="checkbox" value="{{displayFilter.id}}" (click)="filter(displayFilter.id)" disabled *ngIf="displayFilter.disabled">
                    <input type="checkbox" value="{{displayFilter.id}}" (click)="filter(displayFilter.id)" *ngIf="!displayFilter.disabled">
                    {{displayFilter.name}} ({{displayFilter.count}})
                  </label>
                </div>
            </div>
        </div>
    </div>
    `,
    styles: [`#filter.in,
#filter.collapsing {
    display: block!important;
}

.sidebar-toggle .icon-bar{
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 1px;
background-color: #cccccc;}
.material-icons.md-48 { font-size: 48px; }
.material-icons.orange600 { color: #FB8C00; }`]
})

export class FilterComponent implements OnInit, OnDestroy {
    private mergedFilters: any = {};
    private subscriber: EventEmitter<ProductModel[]>;
    private activeFilters: string[] = [];

    displayFilters: any[] = [];

    constructor(private _productService: ProductService) {
    }

    ngOnInit() {
        this.subscriber = this._productService.serviceEvent$.subscribe((products) => {
            this.processFilters(products);
        });

        this._productService.getProducts().subscribe((products) => {
            this.processFilters(products)
        });
    }

    ngOnDestroy() {
        this.subscriber.unsubscribe();
    }

    private mergeFilters(product: ProductModel) {
        product.filters.forEach((filterId: string) => {

            let parts = filterId.split(':');

            if (this.mergedFilters[filterId] === undefined) {
                this.mergedFilters[filterId] = {
                    id: filterId,
                    category: parts[0],
                    urlName: parts[1],
                    name: parts[2],
                    count: 1,
                    disabled: false
                }
            } else {
                this.mergedFilters[filterId].count++;
            }
        });
    }

    private createDisplayFilters() {
        let _displayFilters = [];

        Object.keys(this.mergedFilters).forEach((value: string) => {
            let filterObj = this.mergedFilters[value];
            let filter = this.displayFilters.filter((f) => {
                return f.id === filterObj.id;
            })[0];

            if (filter) {
                filter.count = filterObj.count;
            } else {
                _displayFilters.push(filterObj);
            }
        });
        this.displayFilters = _displayFilters;
    }

    private updateDisplayFilters() {

        let _displayFilters = this.displayFilters.slice();

        _displayFilters.forEach((filter: any) => {
            let filterObj = this.mergedFilters[filter.id];

            if (filterObj) {
                filter.count = filterObj.count;
                filter.disabled = false;
            } else {
                filter.count = 0;
                filter.disabled = true;
            }
        });

        this.displayFilters = _displayFilters;
    }

    private processMergedFilters() {
        if (this.displayFilters.length === 0) {
            this.createDisplayFilters();
        } else {
            this.updateDisplayFilters();
        }
        this.mergedFilters = {};
    }

    private processFilters(products: ProductModel[]) {
        products.forEach((product: ProductModel) => {
            this.mergeFilters(product);
        });

        this.processMergedFilters();
    }

    filter(filterId: string) {
        let idx = this.activeFilters.indexOf(filterId);

        if (idx > -1) {
            this.activeFilters.splice(idx, 1);
        } else {
            this.activeFilters.push(filterId);
        }

        this._productService.filter(this.activeFilters);
    }
}
