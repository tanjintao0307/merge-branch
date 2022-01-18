import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pages1Component } from './page/pages1/pages1.component';
import { PagesBranchOneComponent } from './page/pages-branch-one/pages-branch-one.component';

@NgModule({
  declarations: [
    AppComponent,
    Pages1Component,
    PagesBranchOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
