import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  @Output() PathUpdate = new EventEmitter<any>();
  @Output() UrlUpdate = new EventEmitter<any>();

  stores = [
    {
      name: 'ZaynTek',
      path: "https://store-fuymmqv4qn.mybigcommerce.com/manage/dashboard",
    },
    {
      name: 'Shop Nerium',
      path: "Shop Nerium",
    },
    {
      name: 'WV Gear',
      path: "WV Gear",
    },
    {
      name: 'SUCCESS Store',
      path: "SUCCESS Store",
    },
    {
      name: 'Pruvit Gear',
      path: "Pruvit Gear",
    },
    {
      name: 'Shop My TLC',
      path: "Shop My TLC",
    },
    {
      name: 'Jim Rohn Store',
      path: "Jim Rohn Store",
    },
    {
      name: 'MyTNSHOP',
      path: "MyTNSHOP",
    },
    {
      name: 'Shop Traci Lynn',
      path: "Shop Traci Lynn",
    }
  ];

  paths = [
    {
      name: 'Dashboard',
      path: "",
    },
    {
      name: 'Orders',
      path: "",
    },
    {
      name: 'Orders (Add)',
      path: "",
    },
    {
      name: 'Products',
      path: "",
    },
    {
      name: 'Products (Add)',
      path: "",
    },
    {
      name: 'Products (Options)',
      path: "",
    },
    {
      name: 'Products (Filtering)',
      path: "",
    },
    {
      name: 'Products (Brands)',
      path: "",
    },
    {
      name: 'Products (Reviews)',
      path: "",
    },
    {
      name: 'Product Categories',
      path: "",
    },
    {
      name: 'Customers',
      path: "",
    },
    {
      name: 'Customers (Add)',
      path: "",
    },
    {
      name: 'Customers (Groups)',
      path: "",
    },
    {
      name: 'Storefront (My Themes)',
      path: "",
    },
    {
      name: 'Storefront (Theme Marketplace)',
      path: "",
    },
    {
      name: 'Storefront (Logo)',
      path: "",
    },
    {
      name: 'Storefront (Carousel)',
      path: "",
    },
    {
      name: 'Storefront (Social)',
      path: "",
    },
    {
      name: 'Storefront (Footer Scripts)',
      path: "",
    },
    {
      name: 'Storefront (Web Pages)',
      path: "",
    },
    {
      name: 'Storefront (Blog)',
      path: "",
    },
    {
      name: 'Storefront (Image Manager)',
      path: "",
    },
    {
      name: 'Storefront (Email Templates)',
      path: "",
    },
    {
      name: 'Marketing (Banners)',
      path: "",
    },
    {
      name: 'Marketing (Coupon Codes)',
      path: "",
    },
    {
      name: 'Marketing (Cart-Level Discounts)',
      path: "",
    },
    {
      name: 'Marketing (Email Marketing)',
      path: "",
    },
    {
      name: 'Marketing (Gift Certificates)',
      path: "",
    },
  ];

  constructor() { }

  ngOnInit(): void {}



}
