import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css'],
})
export class ListCustomerComponent implements OnInit {
  customers: Customer[] = [];

  constructor(
    private router: Router,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.loadDataCustomers();
  }

  loadDataCustomers() {
    this.customerService
      .getCustomerList()
      .subscribe((customers) => (this.customers = customers));
  }

  deleteCustomer(customer: Customer) {
    this.customerService.deleteCustomer(customer.id).subscribe((data) => {
      this.loadDataCustomers();
    });
  }

  updateCustomer(customer: Customer) {
    this.router.navigate(['UpdateCustomer', customer.id]);
  }
}
