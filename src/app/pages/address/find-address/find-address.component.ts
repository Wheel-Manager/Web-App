import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/model/address';
import { AddressService } from 'src/app/service/address.service';

@Component({
  selector: 'app-find-address',
  templateUrl: './find-address.component.html',
  styleUrls: ['./find-address.component.css'],
})
export class FindAddressComponent implements OnInit {
  id: number = 0;
  longitude: number = 0;
  latitude: number = 0;
  address: Address = new Address();
  addresses: Address[] = [];

  constructor(private addressService: AddressService) {}

  ngOnInit(): void {}

  searchAddressesById() {
    this.addressService.getAddressesById(this.id).subscribe((address) => {
      console.log(address);
      this.address = address;
    });
  }

  searchAddressesByLongitudeAndLatitude() {
    this.addressService
      .getAddressesByLongitudeAndLatitude(this.longitude, this.latitude)
      .subscribe((addresses) => {
        console.log(addresses);
        this.addresses = addresses;
      });
  }
}
