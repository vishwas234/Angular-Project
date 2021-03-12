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


const appRoot: Routes = [
  { path: 'viewlands', component: ViewlandsComponent },
  { path: 'addland', component: AddlandComponent },
  { path: 'viewbids', component: ViewbidsComponent },
  { path: 'viewlandbyfarmer', component: ViewlandbyfarmerComponent },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'viewbidbybidder', component: ViewbidbybidderComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contactus', component: ContactusComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,


    ViewlandsComponent,
    AddlandComponent,
    ViewbidsComponent,

    ViewlandbyfarmerComponent,
    ViewbidbybidderComponent,
    ContactusComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoot),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
