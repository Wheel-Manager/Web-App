import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/model/address';
import { AddressService } from 'src/app/service/address.service';

@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.css'],
})
export class ListAddressComponent implements OnInit {
  addresses: Address[] = [];

  constructor(private router: Router, private addressService: AddressService) {}

  ngOnInit(): void {
    this.loadDataAddresses();
  }

  loadDataAddresses() {
    this.addressService.getAddressesList().subscribe((addresses) => {
      console.log(addresses);
      this.addresses = addresses;
      console.log(this.addresses);
    });
  }

  deleteAddress(address: Address) {
    this.addressService
      .deleteAddress(address.id)
      .subscribe((data) => this.loadDataAddresses());
  }

  updateAddress(address: Address) {
    this.router.navigate(['UpdateAddress', address.id]);
  }
}
