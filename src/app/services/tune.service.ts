import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import "rxjs/add/operator/do";
import "rxjs/add/operator/scan";
import "rxjs/add/operator/take";

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import { Tune } from "../models/tune";
import { TUNES } from "../mock-data/tunes";

interface QueryConfig {
  path: string; //  path to collection
  field: string; // field to orderBy
  limit: number; // limit per query
  reverse: boolean; // reverse order?
  prepend: boolean; // prepend to source?
}

@Injectable()
export class TuneService {
  tunes: Observable<Tune[]>;

  constructor(private afs: AngularFirestore) {}

  getTune(id: string): Observable<Tune> {
    let tuneDoc = this.afs.doc<Tune>("tunes/" + id);
    return tuneDoc.valueChanges();
  }
}
