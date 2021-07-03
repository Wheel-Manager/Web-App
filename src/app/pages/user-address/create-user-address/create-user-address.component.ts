import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAddress } from 'src/app/model/user-address';
import { UserAddressService } from 'src/app/service/user-address.service';

@Component({
  selector: 'app-create-user-address',
  templateUrl: './create-user-address.component.html',
  styleUrls: ['./create-user-address.component.css'],
})
export class CreateUserAddressComponent implements OnInit {
  userAddress: UserAddress = new UserAddress();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userAddressService: UserAddressService
  ) {}

  ngOnInit(): void {}

  insertUserAddress() {
    this.userAddressService.createUserAddress(this.userAddress).subscribe(
      (datos) => console.log(datos),
      (error) => console.log(error)
    );
    this.userAddress = new UserAddress();
    this.router.navigate(['ListUserAddress']);
  }
}
