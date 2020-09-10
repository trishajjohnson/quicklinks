import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import 'rxjs/add/operator/map';
import { map, take, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RtdbService {

  constructor(
    public db: AngularFireDatabase,
    public storage: AngularFireStorage,
  ) {
    // this.imagesRef = storage.child('images');
  }

  set(loc, data) {
    return this.db.object(loc).set(data);
  }

  get(loc) {
    return this.db.object(loc).valueChanges();
  }

  getAsync(loc) {
    return this.db.object(loc).valueChanges().pipe(take(1)).toPromise();
  }

  getEqualTo(loc, field, value) {
    return this.db.list(loc, ref => ref.orderByChild(field).equalTo(value)).valueChanges();
  }

  update(loc, data) {
    return this.db.object(loc).update(data);
  }

  push(loc, data) {
    return this.db.list(loc).push(data);
  }

  remove(loc, data) {
    return this.db.list(loc).remove(`${data}`);
  }


  removeFileByUrl(url) {
    this.storage.storage.refFromURL(url).delete();
  }

  getList(loc) {
    // return this.db.object(loc).valueChanges();
    return this.db.list(loc).snapshotChanges().pipe(map(this.mapKey));
  }

  mapKey(items: any) {
    return items.map(item => {
      return { ...item.payload.val(), key: item.key }
    });
  }

  getRep(email) {
    email = email.toLowerCase();
    return this.db.list('admin/editors', ref => ref.orderByChild('email').equalTo(email))
      .snapshotChanges().pipe(
          map(this.mapRepKey),
          first()
      )
      .toPromise();
  }

  mapRepKey(item: any) {
    return { ...item[0].payload.val(), rep_key: item[0].key}
  }


}
