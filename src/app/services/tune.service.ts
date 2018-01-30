import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import { Tune } from "../models/tune";
import { TUNES } from "../mock-data/tunes";
@Injectable()
export class TuneService {
  constructor(private readonly afs: AngularFirestore) {}

  getTunes(): Observable<Tune[]> {
    let tunesCollectionRef = this.afs.collection<Tune>("tunes", ref => ref.limit(50));
    return tunesCollectionRef.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Tune;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  getTune(id: string): Observable<Tune> {
    let tuneDoc = this.afs.doc<Tune>("tunes/" + id);
    return tuneDoc.valueChanges();
  }
}
