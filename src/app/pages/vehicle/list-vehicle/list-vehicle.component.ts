import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from 'src/app/model/vehicle';
import { VehicleService } from 'src/app/service/vehicle.service';

@Component({
  selector: 'app-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styleUrls: ['./list-vehicle.component.css'],
})
export class ListVehicleComponent implements OnInit {
  vehicles: Vehicle[] = [];

  constructor(private router: Router, private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.loadDataVehicles();
  }

  loadDataVehicles() {
    this.vehicleService.getVehicleList().subscribe((vehicles) => {
      console.log(vehicles);
      this.vehicles = vehicles;
      console.log(this.vehicles);
    });
  }

  deleteVehicle(vehicle: Vehicle) {
    this.vehicleService
      .deleteVehicle(vehicle.id)
      .subscribe((data) => this.loadDataVehicles());
  }

  updateVehicle(vehicle: Vehicle) {
    this.router.navigate(['UpdateVehicle', vehicle.id]);
  }
}
