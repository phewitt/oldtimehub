import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TuneListComponent } from "./components/tune-list/tune-list.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "tune-list", component: TuneListComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
