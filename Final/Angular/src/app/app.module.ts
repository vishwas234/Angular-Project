import { AuthGuard } from './auth.guard';
import { AdminviewComponent } from './adminview/adminview.component';

import { AddlandComponent } from './addland/addland.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewlandsComponent } from './viewlands/viewlands.component';
import { ViewbidsComponent } from './viewbids/viewbids.component';
import { ViewlandbyfarmerComponent } from './viewlandbyfarmer/viewlandbyfarmer.component';
import { ViewbidbybidderComponent } from './viewbidbybidder/viewbidbybidder.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';
import { AddbidComponent } from './addbid/addbid.component';

const appRoot: Routes = [
  { path: 'viewlands', canActivate: [AuthGuard], component: ViewlandsComponent },
  { path: 'addland', canActivate: [AuthGuard], component: AddlandComponent },
  { path: 'viewbids', canActivate: [AuthGuard], component: ViewbidsComponent },
  { path: 'viewlandbyfarmer', canActivate: [AuthGuard], component: ViewlandbyfarmerComponent },
  { path: '', component: ViewlandsComponent },
  { path: 'admin', canActivate: [AuthGuard], component: AdminviewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'viewbidbybidder', canActivate: [AuthGuard], component: ViewbidbybidderComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'addbid', canActivate: [AuthGuard], component: AddbidComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminviewComponent,
    ViewlandsComponent,
    AddlandComponent,
    ViewbidsComponent,
    ViewlandbyfarmerComponent,
    ViewbidbybidderComponent,
    ContactusComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,

    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoot),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
