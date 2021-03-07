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
import { CommonService } from './common.service';
import { AuthGuard } from './auth.guard';

const appRoot: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'viewbids', component: BidsviewComponent },
  // {path : ' viewlands' , component:  }
  { path: 'addland', component: LandComponent },
  { path: 'bidsview', component: BidsviewComponent },
  { path: 'farmersview', component: FarmersviewComponent },
  { path: 'bidderview', component: BidderviewComponent },
  { path: 'biddingpage', component: BiddingpageComponent },
  { path: 'viewlands', component: ViewlandsComponent },
  { path: 'viewlandsforFarmer', component: ViewlandsFarmerComponent }
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


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoot),
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
