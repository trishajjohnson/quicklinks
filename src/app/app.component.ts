import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quicklinks';
  store = "";
  path = "";
  pathField = this.store + this.path;

  updateURL(data, what) {
    console.log('data :', data);
    this[what] = data; // this updates url or path
    this.pathField = this.store + '/' + this.path;
  }
}
