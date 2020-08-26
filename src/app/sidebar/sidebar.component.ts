import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  orderNumber = '';
  orderSearchPath = '';

  updateOrderPath() {
    this.orderSearchPath = "https://store-fuymmqv4qn.mybigcommerce.com/manage/orders/" + this.orderNumber;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
