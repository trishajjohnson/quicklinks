import { Component, OnInit, Input } from '@angular/core';
import { MainService } from './../main.service';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  @Input() pathField;
  state: any;

  constructor(public mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.state.subscribe(data => {
      this.state = data;
    });
  }

}
