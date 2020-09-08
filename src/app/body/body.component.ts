import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

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

  stores = [
    {
      name: 'ZaynTek',
      path: "https://store-fuymmqv4qn.mybigcommerce.com/manage",
    },
    {
      name: 'JOMA Sandbox',
      path: "https://store-c5svnndw60.mybigcommerce.com/manage" 
    }
  ];

  paths = [
    {
      name: 'Dashboard',
      path: "dashboard",
    },
    {
      name: 'Orders',
      path: "orders",
    },
    {
      name: 'Orders (Add)',
      path: "orders",
    },
    {
      name: 'Products',
      path: "products",
    },
    {
      name: 'Products (Add)',
      path: "products",
    },
    {
      name: 'Products (Options)',
      path: "products",
    },
    {
      name: 'Products (Filtering)',
      path: "products",
    },
    {
      name: 'Products (Brands)',
      path: "products",
    },
    {
      name: 'Products (Reviews)',
      path: "products",
    },
    {
      name: 'Product Categories',
      path: "product",
    },
    {
      name: 'Customers',
      path: "customers",
    },
    {
      name: 'Customers (Add)',
      path: "customers",
    },
    {
      name: 'Customers (Groups)',
      path: "customers",
    },
    {
      name: 'Storefront (My Themes)',
      path: "storefront",
    },
    {
      name: 'Storefront (Theme Marketplace)',
      path: "storefront",
    },
    {
      name: 'Storefront (Logo)',
      path: "storefront",
    },
    {
      name: 'Storefront (Carousel)',
      path: "storefront",
    },
    {
      name: 'Storefront (Social)',
      path: "storefront",
    },
    {
      name: 'Storefront (Footer Scripts)',
      path: "storefront",
    },
    {
      name: 'Storefront (Web Pages)',
      path: "storefront",
    },
    {
      name: 'Storefront (Blog)',
      path: "storefront",
    },
    {
      name: 'Storefront (Image Manager)',
      path: "storefront",
    },
    {
      name: 'Storefront (Email Templates)',
      path: "storefront",
    },
    {
      name: 'Marketing (Banners)',
      path: "marketing",
    },
    {
      name: 'Marketing (Coupon Codes)',
      path: "marketing",
    },
    {
      name: 'Marketing (Cart-Level Discounts)',
      path: "marketing",
    },
    {
      name: 'Marketing (Email Marketing)',
      path: "marketing",
    },
    {
      name: 'Marketing (Gift Certificates)',
      path: "marketing",
    },
  ];

  constructor() { }

  ngOnInit(): void {}



}
