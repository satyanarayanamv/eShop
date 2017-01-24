//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { RatingModule } from 'ngx-rating';
import { HttpModule } from '@angular/http';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

//components
import { AppComponent } from './Components/app.component';
import { MessageComponent } from './Components/Messages/message.component';
import { NavComponent } from './Components/Nav/nav.component';
import { OrdersListComponent } from './Components/Orders/orders.list.component';

import { CatalogComponent } from './Components/Products/catalog.component';
import { ProductComponent } from './Components/Products/product.component';

import { FilterComponent } from './Components/Search/filter.component';
import { SearchComponent } from './Components/Search/search.component';

import { LogInComponent } from './Components/User/login.component';
import { RegisterComponent } from './Components/User/register.component';
import { AddressComponent } from './Components/User/address.component';
import { ProfileComponent} from './Components/User/profile.component';

//directives
import { EqualValidator } from './Directives/equal-validator.directive';

//helpers
import { fakeBackendHelper } from './helpers/fakeAPI';

//services
import { BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { LoginService } from './Services/login.service';
import { MessageService } from './Services/message.service';
import { ProductService } from './Services/products.service';
import { UserService } from './Services/user.service';
import { LoggedInGuard } from './Services/login.guard';

//routes
import { APP_ROUTES} from './Routes/app.routes';

//pipes
import { SortPipe } from './Pipes/sort.pipe';

@NgModule({
    imports : [ BrowserModule, RouterModule.forRoot(APP_ROUTES), FormsModule, RatingModule, HttpModule, Ng2Bs3ModalModule ],
    declarations: [AppComponent, NavComponent, CatalogComponent, OrdersListComponent, FilterComponent, SearchComponent, LogInComponent, 
                    RegisterComponent, EqualValidator, SortPipe, ProductComponent,MessageComponent, AddressComponent, ProfileComponent
                     ],
    bootstrap : [AppComponent],
    providers : [ LoginService, fakeBackendHelper, MockBackend, BaseRequestOptions, 
                MessageService, UserService, LoggedInGuard, ProductService ] 
})
export class AppModule {}