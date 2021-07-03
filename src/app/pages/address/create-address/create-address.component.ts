import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/model/address';
import { AddressService } from 'src/app/service/address.service';

@Component({
  selector: 'app-create-address',
  templateUrl: './create-address.component.html',
  styleUrls: ['./create-address.component.css'],
})
export class CreateAddressComponent implements OnInit {
  address: Address = new Address();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private addressService: AddressService
  ) {}

  ngOnInit(): void {}

  insertAddress() {
    this.addressService.createAddress(this.address).subscribe(
      (datos) => console.log(datos),
      (error) => console.log(error)
    );
    this.address = new Address();
    this.router.navigate(['ListarAddress']);
  }
}
