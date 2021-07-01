import { Component, OnInit } from '@angular/core';
import { VehicleType } from 'src/app/model/vehicle-type';
import { VehicleTypeService } from 'src/app/service/vehicle-type.service';

@Component({
  selector: 'app-find-vehicle-type',
  templateUrl: './find-vehicle-type.component.html',
  styleUrls: ['./find-vehicle-type.component.css'],
})
export class FindVehicleTypeComponent implements OnInit {
  id: number = 0;
  typeName: string = '';
  vehicleType: VehicleType = new VehicleType();
  vehicleTypes: VehicleType[] = [];

  constructor(private vehicleTypeService: VehicleTypeService) {}

  ngOnInit(): void {}

  searchVehicleTypeById() {
    this.vehicleTypeService
      .getVehicleTypeById(this.id)
      .subscribe((vehicleType) => {
        console.log(vehicleType);
        this.vehicleType = vehicleType;
      });
  }

  searchVehicleTypeByVehicleTypeName() {
    this.vehicleTypeService
      .getVehicleTypeByTypeName(this.typeName)
      .subscribe((vehicleTypes) => {
        console.log(vehicleTypes);
        this.vehicleTypes = vehicleTypes;
      });
  }
}
