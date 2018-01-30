import { Component, OnInit } from "@angular/core";

import { TuneService } from "../../services/tune.service";

import { Tune } from "../../models/tune";
import { TUNES } from "../../mock-data/tunes";
@Component({
  selector: "app-tune-list",
  templateUrl: "./tune-list.component.html",
  styleUrls: ["./tune-list.component.css"]
})
export class TuneListComponent implements OnInit {

  constructor(private tuneService: TuneService) {
  }

  ngOnInit() {}
}
