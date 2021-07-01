import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/model/vehicle';
import { VehicleService } from 'src/app/service/vehicle.service';

@Component({
  selector: 'app-find-vehicle',
  templateUrl: './find-vehicle.component.html',
  styleUrls: ['./find-vehicle.component.css'],
})
export class FindVehicleComponent implements OnInit {
  id: number = 0;
  vehicleName: string = '';
  vehicle: Vehicle = new Vehicle();
  vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {}

  searchVehicleById() {
    this.vehicleService.getVehicleById(this.id).subscribe((vehicle) => {
      console.log(vehicle);
      this.vehicle = vehicle;
    });
  }

  searchVehicleByName() {
    this.vehicleService
      .getVehicleByVehicleName(this.vehicleName)
      .subscribe((vehicles) => {
        console.log(vehicles);
        this.vehicles = vehicles;
      });
  }
}
