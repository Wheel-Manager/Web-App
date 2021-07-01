import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-find-customer',
  templateUrl: './find-customer.component.html',
  styleUrls: ['./find-customer.component.css'],
})
export class FindCustomerComponent implements OnInit {
  id: number = 0;
  customerName: string = '';
  customerUsername: string = '';
  customerDni: string = '';
  customer: Customer = new Customer();
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {}

  searchCustomerById() {
    this.customerService.getCustomerById(this.id).subscribe((customer) => {
      console.log(customer);
      this.customer = customer;
    });
  }

  searchCustomerByUsername() {
    this.customerService
      .getCustomerByUsername(this.customerUsername)
      .subscribe((customers) => {
        console.log(customers);
        this.customers = customers;
      });
  }

  searchCustomerByDni() {
    this.customerService
      .getCustomerByDni(this.customerDni)
      .subscribe((customers) => {
        console.log(customers);
        this.customers = customers;
      });
  }

  searchCustomerByName() {
    this.customerService
      .getCustomerByName(this.customerName)
      .subscribe((customers) => {
        console.log(customers);
        this.customers = customers;
      });
  }
}
