import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { ViewlandsComponent } from './viewlands/viewlands.component';
import { LandComponent } from './land/land.component';
import { BidsviewComponent } from './bidsview/bidsview.component';
import { registerLocaleData } from '@angular/common';
import { RegisterComponent } from './register/register.component';


const routes: Routes = []


@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
