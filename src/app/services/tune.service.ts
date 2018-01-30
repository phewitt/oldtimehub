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
  tunesCollectionRef: AngularFirestoreCollection<Tune>;
  tunes: Observable<Tune[]>;
  constructor(private afs: AngularFirestore) {
    this.tunesCollectionRef = this.afs.collection<Tune>("tunes", ref =>
      ref.orderBy("title").limit(50)
    );

    this.tunes = this.tunesCollectionRef.snapshotChanges().map(actions => {
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
