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
import { QueryConfig } from "../models/query-config";
import { TUNES } from "../mock-data/tunes";
import { environment } from "../../environments/environment";

const algoliasearch = require('algoliasearch');
const ALGOLIA_ID = environment.algolia.app_id;
const ALGOLIA_SEARCH_KEY = environment.algolia.search_key;
const ALGOLIA_INDEX_NAME = 'tunes';
const client = algoliasearch(ALGOLIA_ID, ALGOLIA_SEARCH_KEY);
const index = client.initIndex(ALGOLIA_INDEX_NAME);

@Injectable()
export class TuneService {
  tunes: Observable<Tune[]>;

  constructor(private afs: AngularFirestore) {}

  getTune(id: string): Observable<Tune> {
    let tuneDoc = this.afs.doc<Tune>("tunes/" + id);
    return tuneDoc.valueChanges();
  }

  Search(searchStr) {
    index.search({ query: searchStr }, function searchDone(err, content) {
      if (err) {
        console.error(err);
        return;
      }
    
      for (var h in content.hits) {
        console.log(
          `Hit(${content.hits[h].objectID}): ${content.hits[h].toString()}`
        );
      }
    });
  }
}
