import { Routes } from '@angular/router';
import { CatalogComponent } from '../Components/Products/catalog.component';
import { ProductComponent } from '../Components/Products/product.component';
import { OrdersListComponent } from '../Components/Orders/orders.list.component';
import { LogInComponent } from '../Components/User/login.component';
import { ProfileComponent } from '../Components/User/profile.component';
import { RegisterComponent } from '../Components/User/register.component';
import { LoggedInGuard } from '../Services/login.guard';

export const APP_ROUTES: Routes = [
  { path: '', component: CatalogComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'orders', component: OrdersListComponent, canActivate: [LoggedInGuard] },
  { path: 'products', component: CatalogComponent  },
  { path: 'profile', component: ProfileComponent, canActivate: [LoggedInGuard] },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' }
];