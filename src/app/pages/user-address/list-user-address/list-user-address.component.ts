import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAddress } from 'src/app/model/user-address';
import { UserAddressService } from 'src/app/service/user-address.service';

@Component({
  selector: 'app-list-user-address',
  templateUrl: './list-user-address.component.html',
  styleUrls: ['./list-user-address.component.css'],
})
export class ListUserAddressComponent implements OnInit {
  userAddresses: UserAddress[] = [];

  constructor(
    private router: Router,
    private UserAddressService: UserAddressService
  ) {}

  ngOnInit(): void {
    this.loadDataUserAddress();
  }

  loadDataUserAddress() {
    this.UserAddressService.getUserAddressesList().subscribe(
      (userAddresses) => (this.userAddresses = userAddresses)
    );
  }

  deleteUserAddress(userAddress: UserAddress) {
    this.UserAddressService.deleteUserAddress(userAddress.id).subscribe(
      (data) => {
        this.loadDataUserAddress();
      }
    );
  }

  updateUserAddress(userAddress: UserAddress) {
    this.router.navigate(['UpdateUserAddress', userAddress.id]);
  }
}
