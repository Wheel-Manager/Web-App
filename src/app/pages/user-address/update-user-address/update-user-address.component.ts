import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAddress } from 'src/app/model/user-address';
import { UserAddressService } from 'src/app/service/user-address.service';

@Component({
  selector: 'app-update-user-address',
  templateUrl: './update-user-address.component.html',
  styleUrls: ['./update-user-address.component.css'],
})
export class UpdateUserAddressComponent implements OnInit {
  id: number = 0;
  userAddress: UserAddress = new UserAddress();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userAddressService: UserAddressService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userAddressService.getUserAddressesById(this.id).subscribe(
      (datos) => {
        console.log(datos);
        this.userAddress = datos;
      },
      (error) => console.log(error)
    );
  }

  updateUserAddress() {
    this.userAddressService
      .updateUserAddress(this.id, this.userAddress)
      .subscribe(
        (datos) => {
          console.log(datos);
          this.router.navigate(['ListUserAddress']);
        },
        (error) => console.log(error)
      );
    this.userAddress = new UserAddress();
  }
}
