import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Tune } from "../../models/tune";

import { TuneService } from "../../services/tune.service";
@Component({
  selector: "app-tune-details",
  templateUrl: "./tune-details.component.html",
  styleUrls: ["./tune-details.component.css"]
})
export class TuneDetailsComponent implements OnInit {
  tune: Tune;
  constructor(
    private route: ActivatedRoute,
    private tuneService: TuneService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getTune();
  }

  getTune(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.tuneService.getTune(id).subscribe(tune => (this.tune = tune));
  }

  goBack(){
    this.location.back();
  }
}
