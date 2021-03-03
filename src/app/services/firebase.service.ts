import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  collectionName = 'Project';

  constructor(private firestore: AngularFirestore) { }

  create_register(record) {
    return this.firestore.collection(this.collectionName).add(record);
  }

  read_register() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  update_register(recordID, record) {
    this.firestore.doc(this.collectionName + '/' + recordID).update(record);
  }

  delete_register(record_id) {
    this.firestore.doc(this.collectionName + '/' + record_id).delete();
  }
}
