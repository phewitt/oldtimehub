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
  tunesCollectionRef: AngularFirestoreCollection<Tune>;
  tunes: Observable<Tune[]>;

  private _done = new BehaviorSubject(false);
  private _loading = new BehaviorSubject(false);
  private _data = new BehaviorSubject([]);
  private query: QueryConfig;

  // Observable data
  data: Observable<any>;
  done: Observable<boolean> = this._done.asObservable();
  loading: Observable<boolean> = this._loading.asObservable();

  constructor(private afs: AngularFirestore) {
    this.tunesCollectionRef = this.afs.collection<Tune>("tunes", ref => {
      return ref.orderBy("title").limit(50);
    });

    this.tunes = this.tunesCollectionRef.snapshotChanges().map(array => {
      return array.map(snapshot => {
        const data = snapshot.payload.doc.data() as Tune;
        const id = snapshot.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  getTune(id: string): Observable<Tune> {
    let tuneDoc = this.afs.doc<Tune>("tunes/" + id);
    return tuneDoc.valueChanges();
  }

  getNext50(): void {
    //  this.tunesCollectionRef = this.afs.collection<Tune>("tunes", ref => ref.s
  }
}
