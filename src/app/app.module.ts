import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { GlobalNavbarComponent } from './components/global-navbar/global-navbar.component';
import { TuneListComponent } from './components/tune-list/tune-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { TuneDetailsComponent } from './components/tune-details/tune-details.component';


@NgModule({
  declarations: [
    AppComponent,
    GlobalNavbarComponent,
    TuneListComponent,
    PageNotFoundComponent,
    HomeComponent,
    TuneDetailsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
