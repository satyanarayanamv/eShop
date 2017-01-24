"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var product_generator_1 = require("./product.generator");
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
var ProductService = (function () {
    function ProductService() {
        this.products = [];
        this.serviceEvent$ = new core_1.EventEmitter();
        if (this.products.length == 0)
            this.products = product_generator_1.ProductGenerator.getProducts();
    }
    ProductService.prototype.getProducts = function () {
        return Observable_1.Observable.of(this.products);
    };
    ProductService.prototype.getProduct = function (productId) {
        return Observable_1.Observable.of(this.products.filter(function (product) { return product.id == productId; }).map(function (o) { return JSON.stringify(o); }));
    };
    ProductService.prototype.filter = function (filters) {
        if (filters.length === 0) {
            this.serviceEvent$.emit(this.products);
        }
        else {
            this.serviceEvent$.emit(this.products.filter(function (product) {
                var productHasAllFilters = true;
                filters.forEach(function (feature) {
                    if (product.filters.indexOf(feature) > -1 && productHasAllFilters === true) {
                        productHasAllFilters = true;
                    }
                    else {
                        productHasAllFilters = false;
                    }
                });
                return productHasAllFilters;
            }));
        }
    };
    ProductService.prototype.search = function (searchFilter) {
        if (searchFilter.length === 0) {
            this.serviceEvent$.emit(this.products);
        }
        else {
            this.serviceEvent$.emit(this.products.filter(function (item) {
                return item.name.toLowerCase().indexOf(searchFilter.toLowerCase()) > -1;
            }));
        }
    };
    ProductService.prototype.clear = function () {
        this.serviceEvent$.emit(this.products);
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=products.service.js.map