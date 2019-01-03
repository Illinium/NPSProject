import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from '../login.component';
import {AdminComponent} from './admin.component';
import {AuthComponent} from '../auth/auth.component';
import {PriceEditComponent} from './price-edit/price-edit.component';
import {ManicurePriceComponent} from './price-edit/manicure-price/manicure-price.component';
import {HairPriceComponent} from './price-edit/hair-price/hair-price.component';
import {CosmetologyPriceComponent} from './price-edit/cosmetology-price/cosmetology-price.component';
import {VisagePriceComponent} from './price-edit/visage-price/visage-price.component';



const routes: Routes = [
      { path: 'auth', component: AuthComponent },
      { path: '', component: AdminComponent, children: [
          { path: '', component: PriceEditComponent, children: [
              {path: 'manicureprice', component: ManicurePriceComponent},
              {path: 'hairprice', component: HairPriceComponent},
              {path: 'cosmetologyprice', component: CosmetologyPriceComponent},
              {path: 'visageprice', component: VisagePriceComponent}
            ]}
        ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
