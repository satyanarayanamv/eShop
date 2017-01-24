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
var router_1 = require("@angular/router");
var products_service_1 = require("../../Services/products.service");
require("rxjs/Rx");
var ProductComponent = (function () {
    function ProductComponent(aroute, _productService) {
        this.aroute = aroute;
        this._productService = _productService;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.aroute.params.subscribe(function (params) {
            var productId = params['id'];
            _this._productService.getProduct(productId).subscribe(function (products) {
                _this.product = JSON.parse(products[0]);
            });
        });
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'product',
        providers: [products_service_1.ProductService],
        templateUrl: 'product.component.html',
        styleUrls: ['catalog.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        products_service_1.ProductService])
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map