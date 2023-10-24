import { Component, OnInit } from '@angular/core';
import { CustomerService } from './service/customer.service';
import { Router } from '@angular/router';

export interface PackData {
  ingredient: string;
  inventory_code: string;
  quantity: number;
  unit: string
}

export interface CustomerData {
  customer_id : number;
  pack_data : PackData[]
  }

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.sass']
})
export class CustomerComponent implements OnInit {
  public customerData: CustomerData[] = [];
  constructor(private customerService: CustomerService, private router: Router,) { }

  ngOnInit() {
    this.customerService.getUsers().subscribe(data => {
      console.log(data);
      this.customerData = data;
    })
  }

}
