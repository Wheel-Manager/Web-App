import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleType } from 'src/app/model/vehicle-type';
import { VehicleTypeService } from 'src/app/service/vehicle-type.service';

@Component({
  selector: 'app-create-vehicle-type',
  templateUrl: './create-vehicle-type.component.html',
  styleUrls: ['./create-vehicle-type.component.css'],
})
export class CreateVehicleTypeComponent implements OnInit {
  vehicleType: VehicleType = new VehicleType();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vehicleTypeService: VehicleTypeService
  ) {}

  ngOnInit(): void {}

  insertVehicleType() {
    this.vehicleTypeService.createVehicleType(this.vehicleType).subscribe(
      (datos) => console.log(datos),
      (error) => console.log(error)
    );
    this.vehicleType = new VehicleType();
    this.router.navigate(['ListVehicleType']);
  }
}
