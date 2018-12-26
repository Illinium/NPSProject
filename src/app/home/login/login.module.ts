import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthRoutingModule } from './admin/admin-routing.module';
import {AuthService} from './shared/service/auth.service';
import { AuthComponent } from './auth/auth.component';
import { PriceEditComponent } from './admin/price-edit/price-edit.component';
import { ManicurePriceComponent } from './admin/price-edit/manicure-price/manicure-price.component';
import { CosmetologyPriceComponent } from './admin/price-edit/cosmetology-price/cosmetology-price.component';
import { VisagePriceComponent } from './admin/price-edit/visage-price/visage-price.component';
import { HairPriceComponent } from './admin/price-edit/hair-price/hair-price.component';
import { AddManicurePriceComponent } from './admin/price-edit/manicure-price/add-manicure-price/add-manicure-price.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  declarations: [ LoginComponent, AdminComponent, AuthComponent, PriceEditComponent, ManicurePriceComponent, CosmetologyPriceComponent, VisagePriceComponent, HairPriceComponent, AddManicurePriceComponent ],
  providers: [ AuthService ]
})
export class LoginModule { }
