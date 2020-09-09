import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MainService } from './../main.service';

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
  
  state: any;

  updateOrderSearchPath() {
    this.orderSearchPath = this.state.store + '/orders/' + this.orderNumber;
    window.open(this.orderSearchPath, '_blank');
    this.orderNumber = '';
  }

  updateProductSearchPath() {
    this.productSearchPath = this.state.store + '/products?keywords=' + this.productSearch;
    window.open(this.productSearchPath, '_blank');
    this.productSearch = '';
  }
  updateCustomerSearchPath() {

    this.customerSearchPath = this.state.store + '/customers?keywords=' + this.searchCustomer;
    window.open(this.customerSearchPath, '_blank');
    this.searchCustomer = '';
  }
  
  constructor(public mainService: MainService) {
    this.mainService.state.subscribe(data => this.state = data);
   }

  ngOnInit(): void {
    
  }

}
