import { Component, OnInit } from "@angular/core";

import { TuneService } from "../../services/tune.service";
import { PaginationService } from "../../services/pagination.service";

import { Tune } from "../../models/tune";
import { TUNES } from "../../mock-data/tunes";
@Component({
  selector: "app-tune-list",
  templateUrl: "./tune-list.component.html",
  styleUrls: ["./tune-list.component.css"]
})
export class TuneListComponent implements OnInit {
  constructor(
    private tuneService: TuneService,
    public page: PaginationService
  ) {}

  ngOnInit() {
    console.log("init");
    this.page.init("tunes", "title", { reverse: false, prepend: false });
  }

  getMore() {
    this.page.more();
  }

  onScroll(e) {
    console.log("scrolled");
    this.getMore();
  }
  searchByTitle(searchTitle) {
    this.tuneService.Search(searchTitle);
  }
}
