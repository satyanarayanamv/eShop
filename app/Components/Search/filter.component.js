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
var FilterComponent = (function () {
    function FilterComponent(_productService) {
        this._productService = _productService;
        this.mergedFilters = {};
        this.activeFilters = [];
        this.displayFilters = [];
    }
    FilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriber = this._productService.serviceEvent$.subscribe(function (products) {
            _this.processFilters(products);
        });
        this._productService.getProducts().subscribe(function (products) {
            _this.processFilters(products);
        });
    };
    FilterComponent.prototype.ngOnDestroy = function () {
        this.subscriber.unsubscribe();
    };
    FilterComponent.prototype.mergeFilters = function (product) {
        var _this = this;
        product.filters.forEach(function (filterId) {
            var parts = filterId.split(':');
            if (_this.mergedFilters[filterId] === undefined) {
                _this.mergedFilters[filterId] = {
                    id: filterId,
                    category: parts[0],
                    urlName: parts[1],
                    name: parts[2],
                    count: 1,
                    disabled: false
                };
            }
            else {
                _this.mergedFilters[filterId].count++;
            }
        });
    };
    FilterComponent.prototype.createDisplayFilters = function () {
        var _this = this;
        var _displayFilters = [];
        Object.keys(this.mergedFilters).forEach(function (value) {
            var filterObj = _this.mergedFilters[value];
            var filter = _this.displayFilters.filter(function (f) {
                return f.id === filterObj.id;
            })[0];
            if (filter) {
                filter.count = filterObj.count;
            }
            else {
                _displayFilters.push(filterObj);
            }
        });
        this.displayFilters = _displayFilters;
    };
    FilterComponent.prototype.updateDisplayFilters = function () {
        var _this = this;
        var _displayFilters = this.displayFilters.slice();
        _displayFilters.forEach(function (filter) {
            var filterObj = _this.mergedFilters[filter.id];
            if (filterObj) {
                filter.count = filterObj.count;
                filter.disabled = false;
            }
            else {
                filter.count = 0;
                filter.disabled = true;
            }
        });
        this.displayFilters = _displayFilters;
    };
    FilterComponent.prototype.processMergedFilters = function () {
        if (this.displayFilters.length === 0) {
            this.createDisplayFilters();
        }
        else {
            this.updateDisplayFilters();
        }
        this.mergedFilters = {};
    };
    FilterComponent.prototype.processFilters = function (products) {
        var _this = this;
        products.forEach(function (product) {
            _this.mergeFilters(product);
        });
        this.processMergedFilters();
    };
    FilterComponent.prototype.filter = function (filterId) {
        var idx = this.activeFilters.indexOf(filterId);
        if (idx > -1) {
            this.activeFilters.splice(idx, 1);
        }
        else {
            this.activeFilters.push(filterId);
        }
        this._productService.filter(this.activeFilters);
    };
    return FilterComponent;
}());
FilterComponent = __decorate([
    core_1.Component({
        selector: 'filter-component',
        template: "  \n            <a href=\"#\" style=\"color: inherit;\" data-toggle=\"tooltip\" title=\"Filter Products\">  \n              <i class=\"material-icons md-48 visible-xs visible-sm orange600\" data-toggle=\"collapse\" data-target=\"#filter\">\n              filter_list</i>\n              </a>\n    <div class=\"hidden-xs hidden-sm col-md-2\" id=\"filter\">\n        <div class=\"row\" *ngFor=\"let displayFilter of displayFilters\">\n            <div class=\"col-md-12\">\n                <div class=\"checkbox\" [class.disabled]=\"displayFilter.disabled\">\n                  <label>\n                    <input type=\"checkbox\" value=\"{{displayFilter.id}}\" (click)=\"filter(displayFilter.id)\" disabled *ngIf=\"displayFilter.disabled\">\n                    <input type=\"checkbox\" value=\"{{displayFilter.id}}\" (click)=\"filter(displayFilter.id)\" *ngIf=\"!displayFilter.disabled\">\n                    {{displayFilter.name}} ({{displayFilter.count}})\n                  </label>\n                </div>\n            </div>\n        </div>\n    </div>\n    ",
        styles: ["#filter.in,\n#filter.collapsing {\n    display: block!important;\n}\n\n.sidebar-toggle .icon-bar{\n    display: block;\n    width: 22px;\n    height: 2px;\n    border-radius: 1px;\nbackground-color: #cccccc;}\n.material-icons.md-48 { font-size: 48px; }\n.material-icons.orange600 { color: #FB8C00; }"]
    }),
    __metadata("design:paramtypes", [products_service_1.ProductService])
], FilterComponent);
exports.FilterComponent = FilterComponent;
//# sourceMappingURL=filter.component.js.map