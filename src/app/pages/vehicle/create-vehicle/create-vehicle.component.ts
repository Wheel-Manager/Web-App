import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from 'src/app/model/vehicle';
import { VehicleService } from 'src/app/service/vehicle.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css'],
})
export class CreateVehicleComponent implements OnInit {
  vehicle: Vehicle = new Vehicle();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vehicleService: VehicleService
  ) {}

  ngOnInit(): void {}

  insertVehicle() {
    this.vehicleService.createVehicle(this.vehicle).subscribe(
      (datos) => console.log(datos),
      (error) => console.log(error)
    );
    this.vehicle = new Vehicle();
    this.router.navigate(['ListVehicle']);
  }
}
