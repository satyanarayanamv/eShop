"use strict";
var product_model_1 = require("../Models/product.model");
var ProductGenerator = (function () {
    function ProductGenerator() {
    }
    ProductGenerator.getRandomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    ProductGenerator.generateProducts = function () {
        var i = 0;
        var productMax = this.getRandomNumber(10000, 20000);
        var j = 0;
        var filterMax = this.getRandomNumber(16, 72);
        for (i; i < productMax; i++) {
            var product = new product_model_1.ProductModel();
            product.id = this.getRandomNumber(1, 200000);
            product.name = 'Product ' + product.id;
            product.price = this.getRandomNumber(50, 150000);
            product.rating = this.getRandomNumber(0, 5);
            product.currency = '₹';
            product.filters = [];
            product.addedDate = new Date();
            for (j = 0; j < filterMax; j++) {
                var id = this.getRandomNumber(0, 200);
                var filterId = 'feature:filter' + id + ':Filter' + id;
                if (product.filters.indexOf(filterId) < 0) {
                    product.filters.push('feature:filter' + id + ':Filter' + id);
                }
            }
            this.products.push(product);
        }
    };
    ProductGenerator.getProducts = function () {
        if (this.products.length === 0) {
            this.generateProducts();
        }
        return this.products;
    };
    return ProductGenerator;
}());
ProductGenerator.products = [];
exports.ProductGenerator = ProductGenerator;
//# sourceMappingURL=product.generator.js.map