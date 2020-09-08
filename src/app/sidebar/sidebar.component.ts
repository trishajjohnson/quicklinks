import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() pathField;

  orderNumber = '';
  orderSearchPath = '';
  productQuery: any = '';
  customerSearchPath = '';
  searchCustomer = '';
  productSearch = '';
  productSearchPath = '';

  updateOrderSearchPath() {
    this.orderSearchPath = this.pathField + '/' + this.orderNumber;
  }

  updateProductSearchPath() {
    this.productSearchPath = this.pathField + '?keywords=' + this.productSearch;
  }
  updateCustomerSearchPath() {

    this.customerSearchPath = this.pathField + '?keywords=' + this.searchCustomer;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
