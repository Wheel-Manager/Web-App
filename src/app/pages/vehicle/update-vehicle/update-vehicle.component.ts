import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from 'src/app/model/vehicle';
import { VehicleService } from 'src/app/service/vehicle.service';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css'],
})
export class UpdateVehicleComponent implements OnInit {
  id: number = 0;
  vehicle: Vehicle = new Vehicle();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vehicleService: VehicleService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.vehicleService.getVehicleById(this.id).subscribe(
      (datos) => {
        console.log(datos);
        this.vehicle = datos;
      },
      (error) => console.log(error)
    );
  }

  updateVehicle() {
    this.vehicleService.updateVehicle(this.id, this.vehicle).subscribe(
      (datos) => {
        console.log(datos);
        this.router.navigate(['ListVehicle']);
      },
      (error) => console.log(error)
    );
    this.vehicle = new Vehicle();
  }
}
