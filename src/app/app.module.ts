import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {CommonModule} from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ManicureComponent } from './home/manicure/manicure.component';
import { HairComponent } from './home/hair/hair.component';
import { BrownComponent } from './home/brown/brown.component';
import { CosmetologyComponent } from './home/cosmetology/cosmetology.component';
import { LashesComponent } from './home/lashes/lashes.component';
import { MakeupComponent } from './home/makeup/makeup.component';
import { MainComponent } from './home/main/main.component';
import {LoginModule} from './home/login/login.module';
import {UsersService} from './home/login/shared/service/user.service';
import {BaseApi} from './shared/core/base-api';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ManicureComponent,
    HairComponent,
    BrownComponent,
    CosmetologyComponent,
    LashesComponent,
    MakeupComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [UsersService, BaseApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
