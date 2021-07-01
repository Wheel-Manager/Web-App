import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css'],
})
export class CreateCustomerComponent implements OnInit {
  customer: Customer = new Customer();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {}

  insertCustomer() {
    this.customerService.createCustomer(this.customer).subscribe(
      (datos) => console.log(datos),
      (error) => console.log(error)
    );
    this.customer = new Customer();
    this.router.navigate(['ListCustomer']);
  }
}
