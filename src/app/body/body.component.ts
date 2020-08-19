import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  stores = [
    {
      name:'Le-Vel Gear',
      path: "",
    },
    {
      name: 'Shop Nerium',
      path: "",
    },
    {
      name: 'WV Gear',
      path: "",
    },
    {
      name: 'SUCCESS Store',
      path: "",
    },
    {
      name: 'Pruvit Gear',
      path: "",
    },
    {
      name: 'Shop My TLC',
      path: "",
    },
    {
      name: 'Jim Rohn Store',
      path: "",
    },
    {
      name: 'MyTNSHOP',
      path: "",
    },
    {
      name: 'Shop Traci Lynn',
      path: "",
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

  ngOnInit(): void {
  }

}
