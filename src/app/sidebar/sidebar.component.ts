import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() pathField;
  @Input() Store;

  orderNumber = '';
  orderSearchPath = '';
  productQuery: any = '';
  customerSearchPath = '';
  searchCustomer = '';
  productSearch = '';
  productSearchPath = '';
  

  updateOrderSearchPath() {
    this.orderSearchPath = this.Store + '/orders/' + this.orderNumber;
    window.open(this.orderSearchPath, '_blank');
  }

  updateProductSearchPath() {
    this.productSearchPath = this.Store + '/products?keywords=' + this.productSearch;
    window.open(this.orderSearchPath, '_blank');
  }
  updateCustomerSearchPath() {

    this.customerSearchPath = this.Store + '/customers?keywords=' + this.searchCustomer;
    window.open(this.orderSearchPath, '_blank');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
