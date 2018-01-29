import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";

import { Tune } from "../models/tune";
import { TUNES } from "../mock-data/tunes";
@Injectable()
export class TuneService {
  constructor() {}

  getTunes(): Observable<Tune[]> {
    return of(TUNES);
  }
  getTune(id: number): Observable<Tune>{
    return of(TUNES.find(tune => tune.id === id));
  }
}
