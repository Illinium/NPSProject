import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LashesComponent} from './home/lashes/lashes.component';
import {HairComponent} from './home/hair/hair.component';
import {BrownComponent} from './home/brown/brown.component';
import {CosmetologyComponent} from './home/cosmetology/cosmetology.component';
import {MakeupComponent} from './home/makeup/makeup.component';
import {MainComponent} from './home/main/main.component';
import {ManicureComponent} from './home/manicure/manicure.component';
import {LoginComponent} from './home/login/login.component';
import {HomeComponent} from './home/home.component';
import {AuthComponent} from './home/login/auth/auth.component';

const routes: Routes = [
  {path: 'auth', component: AuthComponent},
  { path: '', component: HomeComponent, children: [
      { path: '', component: MainComponent },
      { path: 'manicure', component: ManicureComponent },
      { path: 'hair', component: HairComponent },
      { path: 'brown', component: BrownComponent },
      { path: 'cosmetology', component: CosmetologyComponent },
      { path: 'makeup', component: MakeupComponent },
      { path: 'lashes', component: LashesComponent },
      { path: 'login', component: LoginComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
