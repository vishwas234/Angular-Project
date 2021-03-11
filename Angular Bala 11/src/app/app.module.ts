import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FarmerviewComponent } from './farmerview/farmerview.component';
import { BidderviewComponent } from './bidderview/bidderview.component';
import { ViewlandsComponent } from './viewlands/viewlands.component';
import { AddlandComponent } from './addland/addland.component';
import { ViewbidsComponent } from './viewbids/viewbids.component';
import { AddbidComponent } from './addbid/addbid.component';
import { ViewlandbyfarmerComponent } from './viewlandbyfarmer/viewlandbyfarmer.component';
import { ViewbidbybidderComponent } from './viewbidbybidder/viewbidbybidder.component';


const appRoot : Routes =[
  {path : 'farmerview' , component : FarmerviewComponent },
  {path : 'bidderview' , component : BidderviewComponent},
  {path : 'viewlands' , component : ViewlandsComponent},
  {path : 'addland' , component : AddlandComponent},
  {path : 'viewbids' , component : ViewbidsComponent},
  {path :'addbid',component : AddbidComponent},
  {path :'viewlandbyfarmer', component : ViewlandbyfarmerComponent},
  {path : '',component : LoginComponent},
  {path :'login', component : LoginComponent},
  {path : 'viewbidbybidder',component : ViewbidbybidderComponent},
  {path : 'register',component : RegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FarmerviewComponent,
    BidderviewComponent,
    ViewlandsComponent,
    AddlandComponent,
    ViewbidsComponent,
    AddbidComponent,
    ViewlandbyfarmerComponent,
    ViewbidbybidderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoot)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
