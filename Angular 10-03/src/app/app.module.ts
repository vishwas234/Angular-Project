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
import { BidderviewComponent } from './bidderview/bidderview.component';
import { FarmersviewComponent } from './farmersview/farmersview.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { LandComponent } from './land/land.component';
import { RouterModule, Routes } from '@angular/router';
import { IntropageComponent } from './intropage/intropage.component';

const appRoot: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'addland', component: LandComponent },
  { path: 'farmersview', component: FarmersviewComponent },
  { path: 'bidderview', component: BidderviewComponent },
  //  { path: 'intropage', component: IntropageComponent },
  { path: '', component: IntropageComponent },
  { path: 'admin', component: AdminviewComponent },
  //  { path: '', component: BidderviewComponent }
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
    BidderviewComponent,
    FarmersviewComponent,
    AdminviewComponent,
    LandComponent,
    IntropageComponent,
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
