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

  updateState(val: {}, go?) {
    let newVal = { ...this.data, ...val };
    if (newVal.store) {
      newVal = { ...newVal, ...{ finalURL: `${newVal.store}/${newVal.path}`}};
    }
    else {
      newVal = { ...newVal, ...{ finalURL: ``}};
    }
    this.state.next(newVal);
    if (go){
      this.go();
    }
  }

  go() {
    window.open(this.data.finalURL, '_blank');
  }

}
