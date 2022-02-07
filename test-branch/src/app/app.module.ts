import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pages1Component } from './page/pages1/pages1.component';
import { PagesBranchOneComponent } from './page/pages-branch-one/pages-branch-one.component';
import { PagesBranchTwoComponent } from './page/pages-branch-two/pages-branch-two.component';
import { PagesBranchThreeComponent } from './page/pages-branch-three/pages-branch-three.component';
import { PagesBranchFourComponent } from './page/pages-branch-four/pages-branch-four.component';
import { PagesBranchFiveComponent } from './page/pages-branch-five/pages-branch-five.component';
import { PagesBranchSixComponent } from './page/pages-branch-six/pages-branch-six.component';
import { PagesBranchSevenComponent } from './page/pages-branch-seven/pages-branch-seven.component';
import { PagesBranchEightComponent } from './page/pages-branch-eight/pages-branch-eight.component';
import { PagesBranchNineComponent } from './page/pages-branch-nine/pages-branch-nine.component';

@NgModule({
  declarations: [
    AppComponent,
    Pages1Component,
    PagesBranchOneComponent,
    PagesBranchTwoComponent,
    PagesBranchThreeComponent,
    PagesBranchFourComponent,
    PagesBranchFiveComponent,
    PagesBranchSixComponent,
    PagesBranchSevenComponent,
    PagesBranchEightComponent,
    PagesBranchNineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
