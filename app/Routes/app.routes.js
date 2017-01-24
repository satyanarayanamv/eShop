"use strict";
var catalog_component_1 = require("../Components/Products/catalog.component");
var product_component_1 = require("../Components/Products/product.component");
var orders_list_component_1 = require("../Components/Orders/orders.list.component");
var login_component_1 = require("../Components/User/login.component");
var profile_component_1 = require("../Components/User/profile.component");
var register_component_1 = require("../Components/User/register.component");
var login_guard_1 = require("../Services/login.guard");
exports.APP_ROUTES = [
    { path: '', component: catalog_component_1.CatalogComponent },
    { path: 'product/:id', component: product_component_1.ProductComponent },
    { path: 'orders', component: orders_list_component_1.OrdersListComponent, canActivate: [login_guard_1.LoggedInGuard] },
    { path: 'products', component: catalog_component_1.CatalogComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent, canActivate: [login_guard_1.LoggedInGuard] },
    { path: 'login', component: login_component_1.LogInComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: '**', redirectTo: '' }
];
//# sourceMappingURL=app.routes.js.map