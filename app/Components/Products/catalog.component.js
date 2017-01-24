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
var user_service_1 = require("../../Services/user.service");
var login_service_1 = require("../../Services/login.service");
var router_1 = require("@angular/router");
var CatalogComponent = (function () {
    function CatalogComponent(_productsservice, _router, _userService, _loginService) {
        this._productsservice = _productsservice;
        this._router = _router;
        this._userService = _userService;
        this._loginService = _loginService;
        this.products = [];
        this.productCount = 0;
        this.isDetailsView = false;
        this.sortItems = [
            new SortItem('addedDate', 'Newest Arrivals'),
            new SortItem('price', 'Price: Low to High'),
            new SortItem('-price', 'Price: High to Low'),
            new SortItem('-rating', 'Avg. Customer Review')
        ];
        this.selectedSortItem = this.sortItems[0];
    }
    CatalogComponent.prototype.toggle = function (isDetailsView) {
        this.isDetailsView = isDetailsView;
    };
    CatalogComponent.prototype.loadProducts = function (products) {
        this.productCount = products.length;
        this.products = products.slice(0, 20);
    };
    CatalogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriber = this._productsservice.serviceEvent$.subscribe(function (products) {
            _this.loadProducts(products);
        });
        this._productsservice.getProducts().subscribe(function (products) {
            _this.loadProducts(products);
        }, function (error) {
            console.error("Error in Getting Products List", error);
        });
    };
    CatalogComponent.prototype.showProduct = function (product) {
        this._router.navigate(['/product', product.id]);
    };
    CatalogComponent.prototype.addToCart = function (productId) {
        if (!this._loginService.isLoggedIn())
            this._router.navigate(['/login'], { queryParams: { returnUrl: this._router.routerState.snapshot.url } });
        else {
            var userId = this._loginService.getUserId();
            this._userService.addToCart(productId, userId);
        }
    };
    return CatalogComponent;
}());
CatalogComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'catalog.component.html',
        styleUrls: ['catalog.component.css']
    }),
    __metadata("design:paramtypes", [products_service_1.ProductService, router_1.Router,
        user_service_1.UserService, login_service_1.LoginService])
], CatalogComponent);
exports.CatalogComponent = CatalogComponent;
var SortItem = (function () {
    function SortItem(id, name) {
        this.id = id;
        this.name = name;
    }
    return SortItem;
}());
exports.SortItem = SortItem;
//# sourceMappingURL=catalog.component.js.map