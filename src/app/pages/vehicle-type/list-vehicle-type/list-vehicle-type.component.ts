import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleType } from 'src/app/model/vehicle-type';
import { VehicleTypeService } from 'src/app/service/vehicle-type.service';

@Component({
  selector: 'app-list-vehicle-type',
  templateUrl: './list-vehicle-type.component.html',
  styleUrls: ['./list-vehicle-type.component.css'],
})
export class ListVehicleTypeComponent implements OnInit {
  vehicleTypes: VehicleType[] = [];

  constructor(
    private router: Router,
    private vehicleTypeService: VehicleTypeService
  ) {}

  ngOnInit(): void {
    this.loadDataVehicleType();
  }

  loadDataVehicleType() {
    this.vehicleTypeService
      .getVehicleTypeList()
      .subscribe((vehicleTypes) => (this.vehicleTypes = vehicleTypes));
  }

  deleteVehicleType(vehicleType: VehicleType) {
    this.vehicleTypeService
      .deleteVehicleType(vehicleType.id)
      .subscribe((data) => this.loadDataVehicleType());
  }

  updateVehicleType(vehicleType: VehicleType) {
    this.router.navigate(['UpdateVehicleType', vehicleType.id]);
  }
}
