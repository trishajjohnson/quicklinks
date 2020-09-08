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
  pathQuery: any = "";
  storeQuery: any = "";
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
      path: "add-order",
    },
    {
      name: 'Products',
      path: "products",
    },
    {
      name: 'Products (Add)',
      path: "products/add",
    },
    {
      name: 'Products (Options)',
      path: "products/shared-product-options",
    },
    {
      name: 'Products (Filtering)',
      path: "products/product-filtering",
    },
    {
      name: 'Products (Brands)',
      path: "products/brands",
    },
    {
      name: 'Products (Reviews)',
      path: "products/product-reviews",
    },
    {
      name: 'Product Categories',
      path: "products/categories",
    },
    {
      name: 'Customers',
      path: "customers",
    },
    {
      name: 'Customers (Add)',
      path: "customers/add",
    },
    {
      name: 'Customer Groups',
      path: "customers/groups",
    },
    {
      name: 'Storefront (My Themes)',
      path: "storefront-manager/my-themes",
    },
    {
      name: 'Storefront (Theme Marketplace)',
      path: "marketplace/themes",
    },
    {
      name: 'Storefront (Logo)',
      path: "storefront-manager/logo",
    },
    {
      name: 'Storefront (Carousel)',
      path: "storefront-manager/carousel",
    },
    {
      name: 'Storefront (Social)',
      path: "storefron-manager/social",
    },
    {
      name: 'Storefront (Footer Scripts)',
      path: "script-manager",
    },
    {
      name: 'Storefront (Web Pages)',
      path: "content/pages",
    },
    {
      name: 'Storefront (Blog)',
      path: "content/blog",
    },
    {
      name: 'Storefront (Image Manager)',
      path: "content/pages/image-manager",
    },
    {
      name: 'Storefront (Email Templates)',
      path: "storefront-manager/email-templates",
    },
    {
      name: 'Marketing (Banners)',
      path: "marketing/banners",
    },
    {
      name: 'Marketing (Coupon Codes)',
      path: "marketing/coupons",
    },
    {
      name: 'Marketing (Cart-Level Discounts)',
      path: "marketing",
    },
    {
      name: 'Marketing (Email Marketing)',
      path: "settings/email-marketing",
    },
    {
      name: 'Marketing (Gift Certificates)',
      path: "settings/gift-certificates",
    },
    {
      name: 'Account Settings Users',
      path: "settings/users"
    }
  ];

  constructor() { }

  ngOnInit(): void {}



}
