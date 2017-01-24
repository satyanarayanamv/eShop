"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//modules
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var ngx_rating_1 = require("ngx-rating");
var http_1 = require("@angular/http");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
//components
var app_component_1 = require("./Components/app.component");
var message_component_1 = require("./Components/Messages/message.component");
var nav_component_1 = require("./Components/Nav/nav.component");
var orders_list_component_1 = require("./Components/Orders/orders.list.component");
var catalog_component_1 = require("./Components/Products/catalog.component");
var product_component_1 = require("./Components/Products/product.component");
var filter_component_1 = require("./Components/Search/filter.component");
var search_component_1 = require("./Components/Search/search.component");
var login_component_1 = require("./Components/User/login.component");
var register_component_1 = require("./Components/User/register.component");
var address_component_1 = require("./Components/User/address.component");
var profile_component_1 = require("./Components/User/profile.component");
//directives
var equal_validator_directive_1 = require("./Directives/equal-validator.directive");
//helpers
var fakeAPI_1 = require("./helpers/fakeAPI");
//services
var http_2 = require("@angular/http");
var testing_1 = require("@angular/http/testing");
var login_service_1 = require("./Services/login.service");
var message_service_1 = require("./Services/message.service");
var products_service_1 = require("./Services/products.service");
var user_service_1 = require("./Services/user.service");
var login_guard_1 = require("./Services/login.guard");
//routes
var app_routes_1 = require("./Routes/app.routes");
//pipes
var sort_pipe_1 = require("./Pipes/sort.pipe");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(app_routes_1.APP_ROUTES), forms_1.FormsModule, ngx_rating_1.RatingModule, http_1.HttpModule, ng2_bs3_modal_1.Ng2Bs3ModalModule],
        declarations: [app_component_1.AppComponent, nav_component_1.NavComponent, catalog_component_1.CatalogComponent, orders_list_component_1.OrdersListComponent, filter_component_1.FilterComponent, search_component_1.SearchComponent, login_component_1.LogInComponent,
            register_component_1.RegisterComponent, equal_validator_directive_1.EqualValidator, sort_pipe_1.SortPipe, product_component_1.ProductComponent, message_component_1.MessageComponent, address_component_1.AddressComponent, profile_component_1.ProfileComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [login_service_1.LoginService, fakeAPI_1.fakeBackendHelper, testing_1.MockBackend, http_2.BaseRequestOptions,
            message_service_1.MessageService, user_service_1.UserService, login_guard_1.LoggedInGuard, products_service_1.ProductService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map