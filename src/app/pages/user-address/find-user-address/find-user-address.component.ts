import { Component, OnInit } from '@angular/core';
import { UserAddress } from 'src/app/model/user-address';
import { UserAddressService } from 'src/app/service/user-address.service';

@Component({
  selector: 'app-find-user-address',
  templateUrl: './find-user-address.component.html',
  styleUrls: ['./find-user-address.component.css'],
})
export class FindUserAddressComponent implements OnInit {
  id: number = 0;
  userAddress: UserAddress = new UserAddress();

  constructor(private UserAddressService: UserAddressService) {}

  ngOnInit(): void {}

  searchUserAddressesById() {
    this.UserAddressService.getUserAddressesById(this.id).subscribe(
      (userAddress) => {
        console.log(userAddress);
        this.userAddress = userAddress;
      }
    );
  }
}
