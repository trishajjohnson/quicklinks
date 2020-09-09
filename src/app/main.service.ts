import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  state: BehaviorSubject<any> = new BehaviorSubject<any>({
    store: "",
    path: "",
    finalURL: ""
  });
  data: any;

  constructor() {
    this.state.subscribe(state => {
      console.log('state', state);
      this.data = state;
    });
  }

  updateState(val: {}) {
    let newVal = { ...this.data, ...val };
    newVal = { ...newVal, ...{ finalURL: `${newVal.store}/${newVal.path}`}};
    this.state.next(newVal);
  }

}
