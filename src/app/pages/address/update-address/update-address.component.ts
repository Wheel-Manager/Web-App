import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/model/address';
import { AddressService } from 'src/app/service/address.service';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css'],
})
export class UpdateAddressComponent implements OnInit {
  id: number = 0;
  address: Address = new Address();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private addressService: AddressService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.addressService.getAddressesById(this.id).subscribe(
      (datos) => {
        console.log(datos);
        this.address = datos;
      },
      (error) => console.log(error)
    );
  }

  updateAddress() {
    this.addressService.updateAddress(this.id, this.address).subscribe(
      (datos) => {
        console.log(datos);
        this.router.navigate(['ListAddress']);
      },
      (error) => console.log(error)
    );
    this.address = new Address();
  }
}
