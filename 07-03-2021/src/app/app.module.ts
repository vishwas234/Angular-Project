import { ViewlandsFarmerComponent } from './viewlands-farmer/viewlands-farmer.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FarmerComponent } from './farmer/farmer.component';
import { BidderComponent } from './bidder/bidder.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BidsviewComponent } from './bidsview/bidsview.component';
import { BidderviewComponent } from './bidderview/bidderview.component';
import { BiddingpageComponent } from './biddingpage/biddingpage.component';
import { FarmersviewComponent } from './farmersview/farmersview.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { LandComponent } from './land/land.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewlandsComponent } from './viewlands/viewlands.component';
import { BackgroundComponent } from './background/background.component';
import { FarmerheaderComponent } from './farmerheader/farmerheader.component';
import { BidderheaderComponent } from './bidderheader/bidderheader.component';
import { IntropageComponent } from './intropage/intropage.component';
import { AuthGuard } from './auth.guard';

const appRoot: Routes = [
  { path: 'login',  component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'addland', canActivate:[AuthGuard],component: LandComponent },
  { path: 'bidsview', canActivate:[AuthGuard],component: BidsviewComponent },
  { path: 'farmersview',canActivate:[AuthGuard], component: FarmersviewComponent },
  { path: 'bidderview', canActivate:[AuthGuard],component: BidderviewComponent },
  { path: 'biddingpage', canActivate:[AuthGuard],component: BiddingpageComponent },
  { path: 'viewlands',canActivate:[AuthGuard], component: ViewlandsComponent },
  { path: 'viewlandsforFarmer', canActivate:[AuthGuard],component: ViewlandsFarmerComponent },
  { path: 'farmerheader', component: FarmerheaderComponent },
  { path: 'bidderheader', component: BidderheaderComponent },
  { path: 'intropage', component: IntropageComponent },
  { path: '', component: IntropageComponent },
  
  //{ path: '', component: RegisterComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FarmerComponent,
    BidderComponent,
    FooterComponent,
    HeaderComponent,
    BidsviewComponent,
    BidderviewComponent,
    BiddingpageComponent,
    FarmersviewComponent,
    AdminviewComponent,
    LandComponent,
    ViewlandsComponent,
    BackgroundComponent,
    FarmerheaderComponent,
    BidderheaderComponent,
    IntropageComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoot),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
