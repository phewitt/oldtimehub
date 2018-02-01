// Angular modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// 3rd party modules
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";

import { environment } from "../environments/environment";

// Services
import { TuneService } from "./services/tune.service";
import { PaginationService } from "./services/pagination.service";

// Components
import { AppComponent } from "./app.component";
import { GlobalNavbarComponent } from "./components/global-navbar/global-navbar.component";
import { TuneListComponent } from "./components/tune-list/tune-list.component";
import { AppRoutingModule } from ".//app-routing.module";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { HomeComponent } from "./components/home/home.component";
import { TuneDetailsComponent } from "./components/tune-details/tune-details.component";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SpinnerComponent } from './components/spinner/spinner.component';
@NgModule({
  declarations: [
    AppComponent,
    GlobalNavbarComponent,
    TuneListComponent,
    PageNotFoundComponent,
    HomeComponent,
    TuneDetailsComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    InfiniteScrollModule
  ],
  providers: [TuneService, PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
