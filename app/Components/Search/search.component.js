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
var products_service_1 = require("../../Services/products.service");
var SearchComponent = (function () {
    function SearchComponent(_productService) {
        this._productService = _productService;
        this.searchFilter = "";
    }
    SearchComponent.prototype.searchUsers = function () {
        this._productService.search(this.searchFilter);
    };
    SearchComponent.prototype.clear = function () {
        this._productService.clear();
        this.searchFilter = "";
    };
    SearchComponent.prototype.ngOnInit = function () { };
    return SearchComponent;
}());
__decorate([
    core_1.Input("searchtype"),
    __metadata("design:type", Object)
], SearchComponent.prototype, "searchtype", void 0);
SearchComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'search-component',
        templateUrl: 'search.component.html'
    }),
    __metadata("design:paramtypes", [products_service_1.ProductService])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map