import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pages1Component } from './page/pages1/pages1.component';
import { PagesBranchOneComponent } from './page/pages-branch-one/pages-branch-one.component';
import { PagesBranchTwoComponent } from './page/pages-branch-two/pages-branch-two.component';
import { PagesBranchThreeComponent } from './page/pages-branch-three/pages-branch-three.component';
import { PagesBranchFourComponent } from './page/pages-branch-four/pages-branch-four.component';

@NgModule({
  declarations: [
    AppComponent,
    Pages1Component,
    PagesBranchOneComponent,
    PagesBranchTwoComponent,
    PagesBranchThreeComponent,
    PagesBranchFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
