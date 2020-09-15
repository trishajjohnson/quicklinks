import { toArray } from './functions';
import { RtdbService } from './../rtdb.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MainService } from './../main.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  @Input() pathField;

  @Output() PathUpdate = new EventEmitter<any>();
  @Output() storeUpdate = new EventEmitter<any>();

  Store: any = "";
  Path: any = "";
  pathQuery: any = "";
  storeQuery: any = "";
  addStoreMode: any;
  addPathMode: any;
  editPathMode: any;
  newStore: any = {};
  newPath: any = {};

  state: any;
  stores: any;
  paths: any;

  constructor(
    public mainService: MainService,
    public db: RtdbService,
  ) {
    this.getStores();
    this.getPaths();
  }

  ngOnInit(): void {
    this.mainService.state.subscribe(data => this.state = data);
  }

  getStores() {
    this.db.get('stores').subscribe(data => {
      this.stores = data;
      console.log(this.stores);
    });
  }

  getPaths() {
    this.db.get('paths').subscribe(data => {
      this.paths = data;
    });
  }

  addStore() {
    this.db.push('stores', this.newStore).then(e => {
      console.log(this.newStore);
      this.addStoreMode = false;
      this.newStore = {};
    });
  }

  addPath() {
    this.db.push('paths', this.newPath).then(e => {
      console.log(this.newPath);
      this.addPathMode = false;
      this.newPath = {};
    }); 
  }

  toggleEdit(path) {
    this.editPathMode = path;
    this.newPath = path.value;
  }

  updatePath(key) {
    this.db.update(`paths/${key}`, this.newPath).then(e => {
      console.log(this.newPath);
      this.addPathMode = false;
      this.newPath = {};
      this.editPathMode = !this.editPathMode;
    });
    
  }

  deleteStore(key) {
    this.db.remove("stores", key);
    this.mainService.updateState({store: null, path: null});
    
  }

  deletePath(key) {
    this.db.remove("paths", key);
  }

  goBack() {
    this.addStoreMode = false;
    this.newStore = {};  
  }



  toggleStore(store) {
    if (this.state.store === store) {
      this.mainService.updateState({store: '', path: ''});
    }
    else {
      this.mainService.updateState({store: store});
    }
  
}

}